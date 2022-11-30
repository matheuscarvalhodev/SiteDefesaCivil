import NaoEncontrada from "pages/NaoEncontrada";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeInitial from "pages/home_initial";
import Login from "pages/login";
import NewsRegister from "pages/news_register";
import Ocurrences from "pages/occurrences_page";
import DetalheOcorrencia from "pages/DetalheOcorrencia";
import Report from "pages/report";
import CadastroNoticia from "pages/cadastroNoticia/CadastroNoticia";
import Noticia from "pages/Noticia";
import SimpleLineChart from "pages/estatisticaGrafico";
import VerificationEmail from "pages/recover_password/verification_email";
import RedefinitionPassword from "pages/recover_password/redefinition_password";


function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<HomeInitial />}/>
        <Route path="*" element={<NaoEncontrada erro={"404"} texto={"Ops! Página não encontrada."} />}/>
        <Route path="/news" element={<CadastroNoticia/>}/>
        <Route path="/news/:id" element={<Noticia/>}/>
        <Route path="/ocurrences" element={<Ocurrences/>}/>
        <Route path="/report" element={<Report/>}/>
        <Route path="/ocurrences/:id" element={<DetalheOcorrencia/>}/>
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
