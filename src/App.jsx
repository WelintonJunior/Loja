import Header from "./component/Header";
import LojaContextProvider from "./store/LojaContext";
import AddProduto from "./component/AddProduto";
import AddFuncionario from "./component/AddFuncionario";

function App() {
  return (
    <LojaContextProvider>
      <Header />
      <AddProduto />
      <AddFuncionario />
    </LojaContextProvider>
  );
}

export default App;
