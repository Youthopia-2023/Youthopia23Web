import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Events from './pages/Events/Events';
import Gallery from './pages/Gallery/Gallery';

import PageNotFound from './pages/PageNotFound/PageNotFound';
import EventInfo from './pages/EventInfo/EventInfo';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
function App() {

  return (
    <>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/events" element={<Events/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/eventinfo" element={<EventInfo />} />
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
          <Footer/>
        </Router>
    </>
  )
}

export default App
