import React, { useContext } from "react";
import { LojaContext } from "../store/LojaContext";

export default function ListProdutos() {
  const { produtosState } = useContext(LojaContext);

  return (
    <div>
      <h2>Produtos</h2>
      <ul>
        {Array.isArray(produtosState.produtos) &&
          produtosState.produtos
            .filter(produto => produto && produto.proId) // Filtrar produtos vazios
            .map((produto) => (
              <li key={produto.proId}>{produto.proItem}</li>
            ))}
      </ul>
    </div>
  );
}
