import logo from './logo.svg';
import './App.scss';
import Hero from './components/Hero/Hero';
import Cursor from './components/Cursor/Cursor';
import Portfolio from './components/Portfolio/Portfolio';
import Container from './components/UI/Container';
import About from './components/About/About';

function App() {
  return (
    <div className='App'>
      <Hero />
      <Container>
        <Portfolio />
      </Container>
      <About />
      <Cursor />
    </div>
  );
}

export default App;
