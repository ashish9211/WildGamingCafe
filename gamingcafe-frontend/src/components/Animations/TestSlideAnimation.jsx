import heroImg from '../../assets/0.png'
import TitleBox from '../EXTRAS/TitleBox';
import TitleBoxnoImg from '../EXTRAS/TitleBoxnoImg';
import TitleBoxrev from '../EXTRAS/TitleBoxrev';
const TestSlideAnimation = () => {
   return (
    
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background animation layers */}
      <div className="sliding-bg"></div>
      <div className="sliding-bg bg2"></div>
      <div className="sliding-bg bg3"></div>
      
      {/* Optional content area – keep empty or add future components */}
       <div className="flex-grow flex-col justify-center items-center z-10 relative">
        {/* <TitleBoxrev  />
        <TitleBox/> */}
        <TitleBoxnoImg/>
      </div>


    </div>

      
    
  );


}
export default TestSlideAnimation;