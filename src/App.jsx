import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Projects/>} />
        {/* <Route path='/about' element={<About/>} />
        <Route path='contact' element={<Contact/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
