import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import About from "./components/About";
import Carousel from "./components/Carousel";
import PokemonDetail from "./components/PokemonDetail";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
            <Route path="/pokemonDetail" element={<PokemonDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
