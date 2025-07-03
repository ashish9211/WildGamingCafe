
import './App.css';
import './index.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
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
import ImageTextLayout from './components/Grid/ImageTextLayout';
import PromoPage from './components/Pages/PromoPage';

function App() {
  

  return (
    <>
   <BrowserRouter  >
    
      <Navbar/>
        <Routes>
            
            <Route path="/"   element={<HomePage/>} /> 
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/events' element={<EventsPage/>}/>
            <Route path='/gaminglounge' element={<GamingLounge/>}/>
            <Route path='/promo' element={<PromoPage/>}/>
            <Route path='/gamelibrary' element={<GameLibrary/>}/>
          
        </Routes>
       
      <Footer/>
    
  </BrowserRouter> 
      
      
      
     
    </>
  )
}

export default App
