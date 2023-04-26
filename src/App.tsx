import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "./components/layout";

import Home from "./pages/home";
import CadastrarInformacoes from "./pages/curriculo/CadastrarInformacoes";
import CadastrarExperiencia from "./pages/curriculo/CadastrarExperiencia";
import ListaPortfolio from "./pages/portfolio/ListaPortfolio";
import ListarExperiencia from "./pages/curriculo/ListaExperiencia";
import CadastrarPortfolio from "./pages/portfolio/CadastrarPortfolio";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curriculo/informacoes/cadastro" element={<CadastrarInformacoes />} />
          <Route path="/curriculo/experiencia/cadastro" element={<CadastrarExperiencia />} />
          <Route path="/curriculo/experiencia/lista" element={<ListarExperiencia />} />
          <Route path="/portfolio/cadastro" element={<CadastrarPortfolio />} />
          <Route path="/portfolio/lista" element={<ListaPortfolio />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App