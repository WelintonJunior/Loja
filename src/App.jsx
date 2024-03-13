import Header from "./component/Header";
import LojaContextProvider from "./store/LojaContext";
import AddProduto from "./component/AddProduto";
import AddFuncionario from "./component/AddFuncionario";
import ListProdutos from "./component/ListProdutos";
function App() {
  return (
    <>
      <Header />
      <div className="d-flex">
        <LojaContextProvider>
          <div className="um">
            <AddProduto />
            <AddFuncionario />
          </div>
          <div className="dois">
            <ListProdutos />
          </div>
        </LojaContextProvider>
      </div>
    </>
  );
}

export default App;
