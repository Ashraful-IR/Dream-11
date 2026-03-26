import './App.css'
import Hero from './Component/Hero/Hero'
import Navbar from './Component/NavBar/Navbar'
import { Suspense } from 'react';


function App() {

  return (
    <>
      <header className='container mx-auto'>
        <Navbar />
      </header>
      <main className='container mx-auto my-10 space-y-8'>
          <Hero />
      </main>
      <footer className='container mx-auto'>
      </footer>
    </>
  )
}

export default App
