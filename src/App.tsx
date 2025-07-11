import CountryDetail from './presentation/components/countries/CountryDetail';
import InicioPage from './presentation/pages/InicioPage';
import CountriesPage from './presentation/pages/CountriesPage';
import Footer from './presentation/sections/Footer'
import Header from './presentation/sections/Header'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import CommentPage from './presentation/pages/CommentPage';

function App() {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<InicioPage />}/>
        <Route path="/countries" element={<CountriesPage />}/>
        <Route path="/comment" element={<CommentPage />}/>
        <Route path="/country-detail/:nameCommon" element={<CountryDetail />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
