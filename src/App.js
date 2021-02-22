import Sobremi from './pages/Sobremi'
import Habilidades from './pages/Habilidades'
import Biografia from './pages/Biografia'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <div id="inicio" ></div>
      <Sobremi />
      <div id="habilidades" ></div>
      <Habilidades />
      <div id="sobremi" ></div>
      <Biografia />
    </div>
  );
}

export default App;
