import React from "react";
import { About, Header, Skills, Testimonial, Work, Footer } from "./containter";
import { Navbar } from "./components";
import { CookiesProvider } from "react-cookie";
import "./App.scss";
import CookieInfo from "./components/CookieInfo/CookieInfo";
function App() {
  return (
    <div className="app">
      <CookiesProvider>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
        <CookieInfo />
      </CookiesProvider>
    </div>
  );
}

export default App;
