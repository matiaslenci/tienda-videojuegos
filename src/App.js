import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer/>
    </>
  );
}

export default App;
