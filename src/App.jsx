import Header from "./component/Header";
import LojaContextProvider from "./store/LojaContext";
import AddProduto from "./component/AddProduto";

function App() {
  return (
    <LojaContextProvider>
      <Header />
      <AddProduto />
    </LojaContextProvider>
  );
}

export default App;
