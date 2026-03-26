import './App.css'
import Hero from './Component/Hero/Hero'
import Navbar from './Component/NavBar/Navbar'

function App() {

  return (
    <>
      <header className='container mx-auto'>
        <Navbar />
      </header>
      <main className='container mx-auto my-10'>
          <Hero />
      </main>
      <footer className='container mx-auto'>
        <p>&copy; 2023 My Website. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
