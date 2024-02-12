import {Link,Route, Routes} from "react-router-dom";
import logo from './assets/images/Logo.JPG';
import medal from './assets/images/2023-nieruchomosci400px.png';
import {useNavigate} from "react-router-dom";
import Estates from "./Components/Estates/Estates";
import Contactus from "./Components/Contactus/Contactus";
import About from "./Components/Aboutus/About";
import Services from "./Components/Services/Services";
import Job from "./Components/Job/Job";
import Main from "./Components/Main/Main";
import Managing from "./Components/Managing/Managing";
import'./App.css';
import Agent from "./Components/Job/Agent/Agent";
import Assistant from "./Components/Job/Assistant/Assistant";

function App() {
  let navigate = useNavigate();
  return (
      <div className="wrapper">
        <header>
            <section className="header-container">
                <div className="header-logo">
                  <img src={logo} onClick={()=> navigate('/')}/>
                </div>
                <nav className="header-nav">
          <Link to='/estates'>NIERUCHOMOŚCI</Link>
            <Link to='/managing'>ZARZĄDZANIE</Link>
            <Link to='/job'>PRACA</Link>
            <Link to='/aboutus'>O NAS</Link>
          <Link to='/contact'>KONTAKT</Link>
                    <div className="header-logo-orly">
                        <img src={medal} onClick={()=> navigate('/aboutus')}/>
                    </div>
                </nav>

            </section>
        </header>
          <div className="main">
              <section className="main-container">
        <Routes>
          <Route path='/*' element={<Main/>}/>
          <Route path='/estates' element={<Estates/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path = '/job' element={<Job/>}/>
            <Route path = '/aboutus' element={<About/>}/>
            <Route path = '/contact' element={<Contactus/>}/>
            <Route path = '/managing' element={<Managing/>}/>
            <Route path='/agent' element={<Agent/>}/>
            <Route path='/assistant' element={<Assistant/>}/>
        </Routes>
              </section>
          </div>
          <footer>
              <section className="footer-container">
                  <div className="footer-logo-orly">
              <img src={medal} onClick={()=> navigate('/aboutus')}/>
                  </div>
                  <nav className="footer-nav">
              <Link to='/estates'>NIERUCHOMOŚCI</Link>
                      <Link to='/managing'>ZARZĄDZANIE</Link>
              <Link to='/job'>PRACA</Link>
              <Link to='/aboutus'>O NAS</Link>
              <Link to='/contact'>KONTAKT</Link>
                  </nav>
                  <div className="footer-contact-data">
                      <p><b>tel.:</b> +48 503 195 056</p>
                      <p><b>e-mail:</b> biuro@livein-estates.pl</p>
                      <p>Kraków, ul.Świętokrzyska 12/313</p>
                      <small>Polityka prywatności</small>
                      <small> @ LiveIn 2024</small>
                  </div>
              </section>
          </footer>
      </div>
  )
}

export default App;
