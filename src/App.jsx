import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Events from './pages/Events/Events';
import Gallery from './pages/Gallery/Gallery';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Login from './pages/Login/Login';
function App() {

  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/events" element={<Events/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="*" element={<PageNotFound/>} />
            <Route path='/login' element={<Login/>}/>
            
          </Routes>
        </Router>
    </>
  )
}

export default App
