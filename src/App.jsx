import Header from "./component/Header";
import LojaContextProvider from "./store/LojaContext";
import AddProduto from "./component/AddProduto";
import AddFuncionario from "./component/AddFuncionario";
import ListProdutos from "./component/ListProdutos";
function App() {
  return (
    <LojaContextProvider>
      <Header />
      <AddProduto />
      <AddFuncionario />
      <ListProdutos />
    </LojaContextProvider>
  );
}

export default App;
