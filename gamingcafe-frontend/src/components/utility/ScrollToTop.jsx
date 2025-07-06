import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation(); // Get the entire location object

  useEffect(() => {
    console.log("Location changed to:", location.pathname + location.hash, ". Scrolling to top.");
    window.scrollTo(0, 0);
  }, [location]); // Depend on the entire location object

  return null;
}

export default ScrollToTop;