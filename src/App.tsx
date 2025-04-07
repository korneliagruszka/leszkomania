/**
 * App Component
 *
 * This is the main component of the application. It sets up the routing structure
 * and renders the header, main content, and footer sections.
 *
 * Features:
 * - Uses React Router for navigation between different sections of the website.
 * - Includes routes for the homepage, pictures, handicraft, and renovations.
 * - Renders the "About Me" and "Products" sections on the homepage.
 * - Displays a contact form and contact information in the footer.
 *
 * Imported Components:
 * - Header: Navigation bar for the application.
 * - AboutMe: Introduction about the artist.
 * - Products: Overview of the artist's work.
 * - Images: Gallery of paintings.
 * - Handicraft: Showcase of handcrafted items.
 * - Renovations: Display of renovation projects.
 * - Form: Contact form for user messages.
 * - Contact: Contact information for the artist.
 */

import "./style/reset.scss";
import "./App.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header/header";
import Images from "./components/Images/images";
import Handicraft from "./components/Handicraft/handicraft";
import Renovations from "./components/Renovations/renovations";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe/aboutMe";
import Products from "./components/Products/products";
import Contact from "./components/Contact/contact";
import Form from "./components/Form/form";

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
