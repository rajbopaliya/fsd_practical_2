import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';  
import About from './components/about/About';
import Contact from './components/contact/Contact';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/about" element={<About />}></Route>
      <Route exact path="/contact" element={<Contact />}></Route>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
