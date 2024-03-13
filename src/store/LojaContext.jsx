import { createContext, useReducer } from "react";
import { CadastrarProduto, CadastrarFuncionario } from "../requests/requests";

export const LojaContext = createContext({
  tela: 0,
  handleAddProduto: () => {},
  handleAddFuncionario: () => {},
  handleClearForm: () => {},
});

function produtosReducer(state, action) {
  const item = action.payload.item;
  const quantidade = action.payload.quantidade;
  const und = action.payload.und;

  if (item === "" || quantidade === "" || und === "") {
    alert("Não é permitido campos vazios!");
    return;
  }

  if (action.type === "ADD_PRODUTO") {
    CadastrarProduto(item, quantidade, und);
  }
}

function funcionariosReducer(state, action) {
  const nome = action.payload.nome;
  const nascimento = action.payload.nascimento;

  if (nome === "" || nascimento === "") {
    alert("Não é permitido campos vazios!");
    return;
  }

  if (action.type === "ADD_FUNCIONARIO") {
    CadastrarFuncionario(nome, nascimento);
  }
}

export default function LojaContextProvider({ children }) {
  const [produtosState, produtosDispatch] = useReducer(produtosReducer, {
    produtos: [],
  });

  const [funcionariosState, funcionariosDispatch] = useReducer(
    funcionariosReducer,
    { funcionarios: [] }
  );

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

  function handleAddFuncionario(nome, nascimento) {
    funcionariosDispatch({
      type: "ADD_FUNCIONARIO",
      payload: {
        nome,
        nascimento,
      },
    });
  }

  const lojaCtx = {
    tela: 0,
    handleAddProduto: handleAddProduto,
    handleAddFuncionario: handleAddFuncionario,
  };

  return (
    <LojaContext.Provider value={lojaCtx}>{children}</LojaContext.Provider>
  );
}
