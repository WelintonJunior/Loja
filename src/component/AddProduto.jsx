import { LojaContext } from "../store/LojaContext";
import { useContext, useRef } from "react";

export default function AddProduto() {
  const { handleAddProduto } = useContext(LojaContext);
  const nome = useRef();
  const qntd = useRef();

  return (
    <form className="">
      Nome: <input ref={nome} type="text" /> <br />
      Quatidade: <input ref={qntd} type="number" /><br />
      <button
        onClick={() => handleAddProduto(nome.current.value, qntd.current.value)}
      >
        Enviar
      </button>
    </form>
  );
}