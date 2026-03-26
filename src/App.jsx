import './App.css'
import Hero from './Component/Hero/Hero'
import Navbar from './Component/NavBar/Navbar'
import { Suspense } from 'react';
import Players from './Component/Players/Players';

const fetchPlayers = async () => {
  const response = await fetch('/data.json');
  const data = await response.json();
  return data;
}


function App() {
  const playersData = fetchPlayers();

  return (
    <>
      <header className='container mx-auto'>
        <Navbar />
      </header>
      <main className='container mx-auto my-10 space-y-8'>
          <Hero />
          <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
            <Players playersData={playersData} />
          </Suspense>
          
      </main>
      <footer className='container mx-auto'>
      </footer>
    </>
  )
}

export default App
