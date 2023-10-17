import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        
        <Route path='/' element={ <Homepage /> }></Route>
        <Route path='/about' element={ <About /> } ></Route>
        <Route path='/education' element={ <Education /> } ></Route>
        <Route path='/skills' element={ <Skills /> } ></Route>
        <Route path='/contact' element={ <Contact /> } ></Route>

      </Routes>
    </div>
  );
}

export default App;
