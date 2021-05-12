import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Informacion from "./pages/Informacion";

function App() {
  return (
    <>
      <div id="inicio"></div>
      <Navbar />
      <Inicio />
      <div id="servicios"></div>
      <Servicios />
      <div id="informacion"></div>
      <Informacion />
      <div id="contacto"></div>
    </>
  );
}

export default App;
