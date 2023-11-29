import { BrowserRouter, Routes, Route, } from 'react-router-dom';

import './css/normalize.css'
import Contacto from './pages/Contacto';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Nosotros from './pages/Nosotros';
import Ayuda from './pages/Ayuda';
import Api from './pages/Api';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Nav />
          <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Nosotros" element={<Nosotros/>}/>
          <Route path="/Ayuda" element={<Ayuda/>}/>
          <Route path="/Contacto" element={<Contacto/>}/>
          <Route path="/Api" element={<Api/>}/>
          </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;
