import { useEffect, useRef } from 'react';
import './styles.css'

function Home({children, setRef}) {
  const homeRef = useRef(null);

  useEffect(() => {
    setRef(homeRef)
  }, [])

  return (
    <main ref={homeRef} className="first-page">
      {children}
    </main>
  );
}

export default Home;
