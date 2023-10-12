import './App.css'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Events from './pages/Events/Events';
import Gallery from './pages/Gallery/Gallery';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import EventInfo from './pages/EventInfo/EventInfo';
import IndividualEvent from './components/IndividualEvents/IndividualEvent';
import VerifyEmail from './pages/VerifyEmail/VerifyEmail';
import ConfirmEmail from './pages/ConfirmEmail/ConfirmEmail';



import Registration from './pages/Registration/Registration';
import Profile from './pages/Profile/Profile';
import Ticket from "./components/Ticket/Ticket";
import Register from './pages/Register/Register';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/eventinfo" element={<EventInfo />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<VerifyEmail />} />
          <Route path="/confirm" element={<ConfirmEmail />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ticket" element={<Ticket/>} />
          <Route path="/register" element={<Register/>}/>


          <Route path="*" element={<PageNotFound />} />

          {/* <Route path='/login' element={<Login/>}/> */}
          <Route path='/IndividualEvent' element={<IndividualEvent />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
