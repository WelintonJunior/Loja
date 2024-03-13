import React, { useContext } from "react";
import { LojaContext } from "../store/LojaContext";

export default function ListProdutos() {
  const { produtosState } = useContext(LojaContext);

  return (
    <div>
      <h2>Produtos</h2>
      <ul>
        {Array.isArray(produtosState.produtos) &&
          produtosState.produtos.map((produto) => (
            <li key={produto.proId}>{produto.proItem}</li>
          ))}
      </ul>
    </div>
  );
}
