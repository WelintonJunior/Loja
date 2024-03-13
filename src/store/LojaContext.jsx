// LojaContext.jsx

import React, { createContext, useReducer, useEffect } from "react";
import {
  CadastrarProduto,
  CadastrarFuncionario,
  SearchProduto,
} from "../requests/requests";

export const LojaContext = createContext({
  tela: 0,
  handleAddProduto: () => {},
  handleAddFuncionario: () => {},
  handleClearForm: () => {},
  handlePesquisarProduto: () => {},
});

// REDUCER DOS PRODUTOS
function produtosReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_PRODUTO": {
      const { item, quantidade, und } = payload;
      if (item === "" || quantidade === "" || und === "") {
        alert("Não é permitido campos vazios!");
        return state;
      }
      CadastrarProduto(item, quantidade, und);
      return state;
    }
    case "SET_PRODUTOS": {
      return { ...state, produtos: payload };
    }
    default:
      return state;
  }
}

// REDUCER DOS FUNCIONÁRIOS
function funcionariosReducer(state, action) {
  const { type, payload } = action;
  const { nome, nascimento } = payload;
  switch (type) {
    case "ADD_FUNCIONARIO": {
      if (nome === "" || nascimento === "") {
        alert("Não é permitido campos vazios!");
        return state;
      }
      CadastrarFuncionario(nome, nascimento);
      return state;
    }
    default:
      return state;
  }
}

export default function LojaContextProvider({ children }) {
  // LÓGICA DOS PRODUTOS
  const [produtosState, produtosDispatch] = useReducer(produtosReducer, {
    produtos: [],
  });

  // LÓGICA DOS FUNCIONÁRIOS
  const [funcionariosState, funcionariosDispatch] = useReducer(
    funcionariosReducer,
    { funcionarios: [] }
  );

  // EFEITO PARA PESQUISAR PRODUTOS QUANDO O COMPONENTE MONTAR
  useEffect(() => {
    handlePesquisarProduto();
  }, []);

  // FUNÇÃO PARA ADICIONAR PRODUTO
  function handleAddProduto(item, quantidade, und) {
    produtosDispatch({
      type: "ADD_PRODUTO",
      payload: {
        item,
        quantidade,
        und,
      },
    });
  }

  // FUNÇÃO PARA PESQUISAR PRODUTO
  function handlePesquisarProduto() {
    SearchProduto()
      .then((dados) => {
        produtosDispatch({
          type: "SET_PRODUTOS",
          payload: dados,
        });
      })
      .catch((error) => {
        console.error("Erro ao pesquisar produtos:", error);
      });
  }

  // FUNÇÃO PARA ADICIONAR FUNCIONÁRIO
  function handleAddFuncionario(nome, nascimento) {
    funcionariosDispatch({
      type: "ADD_FUNCIONARIO",
      payload: {
        nome,
        nascimento,
      },
    });
  }

  // CONTEXT VALUE
  const lojaCtx = {
    tela: 0,
    handleAddProduto,
    handleAddFuncionario,
    handlePesquisarProduto,
    funcionariosState,
    produtosState,
  };

  return (
    <LojaContext.Provider value={lojaCtx}>{children}</LojaContext.Provider>
  );
}
