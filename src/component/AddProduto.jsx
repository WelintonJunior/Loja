import { LojaContext } from "../store/LojaContext";
import { useContext, useRef } from "react";

export default function AddProduto() {
  const { handleAddProduto } = useContext(LojaContext);
  const nome = useRef();
  const qntd = useRef();
  const und = useRef();

  return (
    <>
      Nome: <input ref={nome} type="text" /> <br />
      Quatidade: <input ref={qntd} type="number" />
      <br />
      Valor (u): <input ref={und} type="number" />
      <br />
      <button
        onClick={() =>
          handleAddProduto(
            nome.current.value,
            qntd.current.value,
            und.current.value
          )
        }
      >
        Enviar
      </button>
    </>
  );
}
