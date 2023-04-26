
import {Route, Routes, BrowserRouter} from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Cadastro from "./pages/cadastro/Cadastro";
import Navbar from "./components/static/menu/Navbar";
import Footer from "./components/static/footer/Footer";
import ListaTema from "./components/temas/listatema/ListaTema";
import CadastroTema from "./components/temas/cadastroTema/CadastroTema";
import CadastroPosts from "./components/postagens/cadastroPosts/CadastroPosts";
import DeletarPost from "./components/postagens/deletarPostagem/DeletarPost";
function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <div style={{ minHeight:'100vh' }}>
      <Routes>
        <Route path="/" element={<Login />} />;
        <Route path="/login" element={<Login />} />;
        <Route path="/home" element={<Home />} />;
        <Route path="/cadastro" element={<Cadastro />} />;

        <Route path="/login" element={<Login />} />;
        
        <Route path="/temas" element={<ListaTema />} />;
        <Route path="/formularioTema" element={<CadastroTema />} />;
        <Route path="/formularioTema:id" element={<CadastroTema />} />;

        <Route path ="/formularioPostagem" element={<CadastroPosts />} />;
        <Route path ="/formularioPostagem:id" element={<CadastroPosts />} />;
        <Route path="/deletarPost:id" element={<DeletarPost />} />;
      </Routes>
      </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;

