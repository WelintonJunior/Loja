import { LojaContext } from "../store/LojaContext";
import { useContext, useRef } from "react";

export default function AddProduto() {
  const { handleAddProduto } = useContext(LojaContext);
  const nome = useRef();
  const qntd = useRef();
  const und = useRef();

  function clearForm () {
    nome.current.value = ""
    qntd.current.value = ""
    und.current.value = ""
  }

  function handleEnviarForm() {
    handleAddProduto(nome.current.value, qntd.current.value, und.current.value);
    clearForm();
  }

  return (
    <div className="Form">
      <h3 className="pb-1">Cadastrar Produto</h3>
      <div className="row pb-1">
        <label className="py-1 col-4">Nome: </label>
        <input className="py-1 col-7" ref={nome} type="text" />
      </div>
      <div className="row pb-1">
        <label className="py-1 col-4">Quatidade: </label>
        <input className="py-1 col-7" ref={qntd} type="number" />
      </div>
      <div className="row">
        <label className="py-1 col-4">Valor (u): </label>
        <input className="py-1 col-7" ref={und} type="number" />
      </div>
      <div className="buttonBox">
        <button onClick={handleEnviarForm}>Enviar</button>
      </div>
    </div>
  );
}
