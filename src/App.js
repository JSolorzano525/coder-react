import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/item-list-container/ItemListContainer";
import ItemDetailContainer from "./components/item-detail-container/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* componentes que estan en todas las rutas */}
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greetings={"Hola"} />} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
