import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Barra from "./componentes/Barra";
import DetallePokemones from "./views/DetallePokemones";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Personajes from "./views/Personajes";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Barra></Barra>
        <Routes>  
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/personajes" element={<Personajes></Personajes>}></Route>
          <Route path="/personajes/:id" element={<DetallePokemones></DetallePokemones>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>   
      </BrowserRouter>
    </div>
  );
}

export default App;
