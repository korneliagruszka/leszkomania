import './style/reset.scss';
import './App.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Header from './components/Header/header';
import Images from './components/Images/images';
import Handicraft from './components/Handicraft/handicraft';
import Renovations from './components/Renovations/renovations';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe/aboutMe';
import Products from './components/Products/products';
import Contact from './components/Contact/contact';
import Form from './components/Form/form';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App_header">
          <Header />
        </header>
        <main>
          <Routes>
            
            <Route
              path="/"
              element={
                <>
                  <section id="about_me">
                    <AboutMe />
                  </section>
                  <section id="products">
                    <Products />
                  </section>
                </>
              }
            />
            
            <Route path="/pictures" element={<Images />} />
            <Route path="/handicraft" element={<Handicraft />} />
            <Route path="/renovations" element={<Renovations />} />
          </Routes>
          <Form />
        </main>
        
        <footer>
          <section id="contact">
            <Contact />
          </section>
        </footer>
      </div>
    </Router>
  );
}

export default App;