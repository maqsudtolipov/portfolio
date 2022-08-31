import logo from './logo.svg';
import './App.scss';
import Hero from './components/Hero/Hero';
import Cursor from './components/Cursor/Cursor';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className='App'>
      <Hero />
      <Portfolio />
      <Cursor />
    </div>
  );
}

export default App;
