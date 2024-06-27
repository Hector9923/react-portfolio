import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Projects/>} />
        <Route path='/about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
