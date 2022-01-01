
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact Me/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div>
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
