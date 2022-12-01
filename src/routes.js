import NaoEncontrada from "pages/NaoEncontrada";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeInitial from "pages/PaginaInicial";
import Login from "pages/Login";
import NewsRegister from "pages/Cadastro";
import Ocurrences from "pages/OcorrenciaLista";
import DetalheOcorrencia from "pages/DetalheOcorrencia";
import Report from "pages/Relatorio";
import CadastroNoticia from "pages/CadastroNoticia/CadastroNoticia";
import Noticia from "pages/Noticia";
import SimpleLineChart from "pages/EstatisticaGrafico";
import VerificationEmail from "pages/RecuperaSenha/verification_email";
import RedefinitionPassword from "pages/RecuperaSenha/redefinition_password";


function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<HomeInitial />}/>
        <Route path="*" element={<NaoEncontrada erro={"404"} texto={"Ops! Página não encontrada."} />}/>
        <Route path="/news" element={<CadastroNoticia/>}/>
        <Route path="/news/:id" element={<Noticia/>}/>
        <Route path="/ocurrences" element={<Ocurrences/>}/>
        <Route path="/ocurrences/:id" element={<DetalheOcorrencia/>}/>
        <Route path="/report" element={<Report/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/new_register" element={<NewsRegister/>}/>
        <Route path="/recover-password" element={<VerificationEmail/>}/>
        <Route path="/change-password" element={<RedefinitionPassword/>}/>
        <Route path="/estatistic" element={<SimpleLineChart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
