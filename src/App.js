import { useEffect } from 'react';
import gsap from 'gsap';

import logo from './logo.svg';
import './App.scss';
import Hero from './components/Hero/Hero';
import Cursor from './components/Cursor/Cursor';
import Portfolio from './components/Portfolio/Portfolio';
import Container from './components/UI/Container';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  useEffect(() => {
    const tl = gsap.timeline({});

    tl.to('.first', {
      height: 0,
      delay: 0.5,
    });

    tl.to(
      '.second',
      {
        height: 0,
      },
      '<50%'
    );

    tl.to(
      '.third',
      {
        height: 0,
      },
      '<50%'
    );

    tl.to(
      '.fourth',
      {
        height: 0,
      },
      '<50%'
    );
  }, []);

  return (
    <div className='App'>
      <Hero />
      <Container>
        <Portfolio />
      </Container>
      <Container>
        <About />
      </Container>
      <Container>
        <Contact />
      </Container>
      <Cursor />

      {/* animation overlay */}
      <div className='overlay first'></div>
      <div className='overlay second'></div>
      <div className='overlay third'></div>
      <div className='overlay fourth'></div>
    </div>
  );
}

export default App;
