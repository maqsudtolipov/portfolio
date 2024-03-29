import { useEffect } from "react";
import gsap from "gsap";

import "./App.scss";
import "./Queries.scss";
import Hero from "./components/Hero/Hero";
import Cursor from "./components/Cursor/Cursor";
import Portfolio from "./components/Portfolio/Portfolio";
import Container from "./components/UI/Container";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Spotify from "./Pages/Spotify";
import Instagram from "./Pages/Instagram";
import Soon from "./components/Soon";

function App() {
  // useEffect(() => {
  //   const tl = gsap.timeline({});
  //   const buttons = document.querySelectorAll("button");
  //   const inputs = document.querySelectorAll("input");
  //   const textareas = document.querySelectorAll("textarea");
  //   const cursor = document.querySelector(".cursor");
  //   const footerLinks = document.querySelectorAll(".footer-icon");
  //
  //   tl.to(".first", {
  //     width: 0,
  //     delay: 0.5,
  //   });
  //
  //   tl.to(
  //     ".second",
  //     {
  //       width: 0,
  //     },
  //     "<0%",
  //   );
  //
  //   tl.to(
  //     ".third",
  //     {
  //       width: 0,
  //     },
  //     "<0%",
  //   );
  //
  //   tl.to(
  //     ".fourth",
  //     {
  //       width: 0,
  //     },
  //     "<0%",
  //   );
  //
  //   tl.to(".overlay", {
  //     border: "0px solid black",
  //   });
  //
  //   console.log(buttons);
  //
  //   buttons.forEach((button) => {
  //     button.addEventListener("mouseover", () =>
  //       cursor.classList.add("c-none"),
  //     );
  //     button.addEventListener("mouseout", () =>
  //       cursor.classList.remove("c-none"),
  //     );
  //   });
  //
  //   inputs.forEach((input) => {
  //     input.addEventListener("mouseover", () => cursor.classList.add("c-none"));
  //     input.addEventListener("mouseout", () =>
  //       cursor.classList.remove("c-none"),
  //     );
  //   });
  //
  //   textareas.forEach((textarea) => {
  //     textarea.addEventListener("mouseover", () =>
  //       cursor.classList.add("c-none"),
  //     );
  //     textarea.addEventListener("mouseout", () =>
  //       cursor.classList.remove("c-none"),
  //     );
  //   });
  //
  //   footerLinks.forEach((link) => {
  //     link.addEventListener("mouseover", () => cursor.classList.add("c-none"));
  //     link.addEventListener("mouseout", () =>
  //       cursor.classList.remove("c-none"),
  //     );
  //   });
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/*<Route*/}
          {/*  path="/"*/}
          {/*  element={*/}
          {/*    <>*/}
          {/*      <Nav />*/}
          {/*      <Hero />*/}
          {/*      <Container>*/}
          {/*        <Portfolio />*/}
          {/*      </Container>*/}
          {/*      <Container>*/}
          {/*        <About />*/}
          {/*      </Container>*/}
          {/*      <Container>*/}
          {/*        <Contact />*/}
          {/*      </Container>*/}
          {/*      <Footer />*/}
          {/*      <Cursor />*/}
          {/*    </>*/}
          {/*  }*/}
          {/*></Route>*/}
          {/*<Route*/}
          {/*  path="/aa"*/}
          {/*  element={*/}
          {/*    <>*/}
          {/*      <Nav />*/}
          {/*      <Hero />*/}
          {/*      <Container>*/}
          {/*        <Spotify />*/}
          {/*      </Container>*/}
          {/*      <Footer />*/}
          {/*      <Cursor />*/}
          {/*    </>*/}
          {/*  }*/}
          {/*></Route>*/}
          {/*<Route*/}
          {/*  path="/projects/spotify"*/}
          {/*  element={*/}
          {/*    <>*/}
          {/*      <Nav />*/}
          {/*      <Container>*/}
          {/*        <Spotify />*/}
          {/*      </Container>*/}
          {/*      <Footer />*/}
          {/*      <Cursor />*/}
          {/*    </>*/}
          {/*  }*/}
          {/*></Route>*/}
          {/*<Route*/}
          {/*  path="/projects/instagram"*/}
          {/*  element={*/}
          {/*    <>*/}
          {/*      <Nav />*/}
          {/*      <Container>*/}
          {/*        <Instagram />*/}
          {/*      </Container>*/}
          {/*      <Footer />*/}
          {/*      <Cursor />*/}
          {/*    </>*/}
          {/*  }*/}
          {/*></Route>*/}
          <Route path="*" element={<Soon />} />
        </Routes>

        {/* animation overlay */}
        {/*<div className="overlay first"></div>*/}
        {/*<div className="overlay second"></div>*/}
        {/*<div className="overlay third"></div>*/}
        {/*<div className="overlay fourth"></div>*/}
      </BrowserRouter>
    </div>
  );
}

export default App;
