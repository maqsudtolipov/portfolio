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
    const buttons = document.querySelectorAll('button');
    const inputs = document.querySelectorAll('input');
    const textareas = document.querySelectorAll('textarea');
    const cursor = document.querySelector('.cursor');

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

    console.log(buttons);

    buttons.forEach((button) => {
      button.addEventListener('mouseover', () =>
        cursor.classList.add('c-none')
      );
      button.addEventListener('mouseout', () =>
        cursor.classList.remove('c-none')
      );
    });

    inputs.forEach((input) => {
      input.addEventListener('mouseover', () => cursor.classList.add('c-none'));
      input.addEventListener('mouseout', () =>
        cursor.classList.remove('c-none')
      );
    });

    textareas.forEach((textarea) => {
      textarea.addEventListener('mouseover', () =>
        cursor.classList.add('c-none')
      );
      textarea.addEventListener('mouseout', () =>
        cursor.classList.remove('c-none')
      );
    });
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
