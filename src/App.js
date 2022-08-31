import logo from './logo.svg';
import './App.scss';
import Hero from './components/Hero/Hero';
import Cursor from './components/Cursor/Cursor';
import Portfolio from './components/Portfolio/Portfolio';
import Container from './components/UI/Container';

function App() {
  return (
    <div className='App'>
      <Hero />
      <Container>
        <Portfolio />
      </Container>
      <Cursor />
    </div>
  );
}

export default App;
