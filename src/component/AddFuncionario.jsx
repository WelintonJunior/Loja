import { LojaContext } from "../store/LojaContext";
import { useContext, useRef } from "react";

export default function AddFuncionario() {
  const { handleAddFuncionario } = useContext(LojaContext);
  const nome = useRef();
  const nasc = useRef();

  function clearForm() {
    nome.current.value = "";
    nasc.current.value = "";
  }

  function handleEnviarForm() {
    handleAddFuncionario(nome.current.value, nasc.current.value);
    clearForm();
  }

  return (
    <div className="Form">
      <h3 className="pb-1">Cadastrar Funcionario</h3>
      <div className="row pb-1">
        <label className="py-1 col-4">Nome: </label>
        <input className="py-1 col-7" ref={nome} type="text" />
      </div>
      <div className="row">
        <label className="py-1 col-4">Data Nascimento: </label>
        <input className="py-1 col-7" ref={nasc} type="date" />
      </div>
      <div className="buttonBox">
        <button onClick={handleEnviarForm}>Enviar</button>
      </div>
    </div>
  );
}
