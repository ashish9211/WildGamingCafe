
import './App.css';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Pages/Navbar';
import Contact from './components/Pages/ContactPage';
import Footer from './components/Pages/Footer';
import HomePage from './components/Pages/HomePage';
import EventsPage from './components/Pages/EventsPage';
import GamingLounge from './components/Pages/GamingLounge';
import TestSlideAnimation from './components/Animations/TestSlideAnimation'
import SectionWithImageAndText from './components/EXTRAS/SectionWithImageAndText';
import GameLibrary from './components/Pages/GameLibrary';
import BeachWaveAnimation from './components/Animations/BeachWaveAnimation';

function App() {
  

  return (
    <>

    <Router>
      <Navbar/>
        <Routes>
          <Route path="/"   element={<HomePage/>} /> 
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/events' element={<EventsPage/>}/>
          <Route path='/gaminglounge' element={<GamingLounge/>}/>
          <Route path='/promo' element={<BeachWaveAnimation/>}/>
          {/* <Route path='/promo' element={<TestSlideAnimation/>}/> */}
          <Route path='/gamelibrary' element={<GameLibrary/>}/>
        </Routes>
      
      <Footer/>
    </Router>
      
      
      
     
    </>
  )
}

export default App
