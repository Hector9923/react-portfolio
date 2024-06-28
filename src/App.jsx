import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import About from './pages/About';
import Resume from './pages/Resume';
import RecommendationLetterOne from './pages/RecommendationLetterOne';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Projects/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/whistle-coding-recommendation-letter' element={<RecommendationLetterOne/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
