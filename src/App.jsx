import { useEffect, useState } from 'react'

import Home from './components/Home'
import First from './components/First'
import Second from './components/Second'
import Menu from './components/Menu'

import './assets/global.css'
import Third from './components/Third'

function App() {
  const pages = [
    'first-page',
    'second-page',
    'third-page'
  ]
  
  const [homeRef, setRef] = useState(null);

  const [page, setPage] = useState(0);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, {passive: true});

    function handleScroll(e) {
      setPage(p => e.deltaY > 0 ?  p += 1 : p-= 1);
    }
  }, []);
  // window.addEventListener('touchStart', handleWheelDown, {passive: true});
  // window.addEventListener('touchStart', handleWheelDown, {passive: true});

  useEffect(() => {
    if (homeRef !== null ) {  
      const wrapper = homeRef.current;

      wrapper.classList.remove(...wrapper.classList);
      wrapper.classList.add(pages[page]);

      if (page < 0) setPage(pages.length - 1);
      else if (page > pages.length - 1) setPage(0)
    } 
  }, [page]);

  return (
    <Home setRef={setRef}>
      <Menu />
     {page === 0 ? <First /> : null} 
     {page === 1 ? <Second /> : null}
     {page === 2 ? <Third /> : null}
    </Home>
  )
}

export default App;