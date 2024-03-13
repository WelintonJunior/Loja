import { createContext, useReducer } from "react";
import { CadastrarProduto, CadastrarFuncionario } from "../requests/requests";

export const LojaContext = createContext({
  tela: 0,
  handleAddProduto: () => {},
  handleAddFuncionario: () => {},
});

function produtosReducer(state, action) {
  if (action.type === "ADD_PRODUTO") {
    CadastrarProduto(
      action.payload.item,
      action.payload.quantidade,
      action.payload.und
    );
  }
}

function funcionariosReducer(state, action) {
  if (action.type === "ADD_FUNCIONARIO") {
    CadastrarFuncionario(action.payload.nome, action.payload.nascimento);
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

  function handleAddFuncionario() {
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
