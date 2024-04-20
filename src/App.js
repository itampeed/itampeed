import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(props) {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/about' exact element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
