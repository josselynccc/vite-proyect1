import InicioPage from './presentation/pages/InicioPage';
import PaisesPage from './presentation/pages/PaisesPage';
import Footer from './presentation/sections/Footer'
import Header from './presentation/sections/Header'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<InicioPage />}/>
        <Route path="/paises" element={<PaisesPage />}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
