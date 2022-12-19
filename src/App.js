import "./App.css";

import { Home } from "./components/Home/Home";
import ItemListContainer from "./components/Products/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import SliderViewedDetailContainer from "./components/SliderViewedDetailContainer/SliderViewedDetailContainer";
import SliderDetailContainer from "./components/SliderDetailContainer/SliderDetailContainer";
import NotFound from "./components/NotFound/NotFound";
import { Nosotros } from "./components/Nosotros/Nosotros";
import { Contacto } from "./components/Contacto/Contacto";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Ayuda } from "./components/Ayuda/Ayuda";
import Whatsap from "./components/Whatsap/Whatsap";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SliderDetail/:id" element={<SliderDetailContainer />} />
          <Route
            path="/SliderViewedDetail/:id"
            element={<SliderViewedDetailContainer />}
          />
          <Route path="/todos" element={<ItemListContainer />} />
          <Route path="/categoria/:cat" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/ayuda" element={<Ayuda />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Whatsap />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
