// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Only scroll to the top if there is no hash in the URL
    // This allows browser's default (and scroll-margin-top) to handle hash links
    if (!location.hash) {
      console.log("Navigating to:", location.pathname, ". No hash, scrolling to top.");
      window.scrollTo(0, 0);
    } else {
      console.log("Hash detected:", location.hash, ". Letting browser handle scroll.");
    }
  }, [location]);

  return null;
}

export default ScrollToTop;