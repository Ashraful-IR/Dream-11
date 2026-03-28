import "./App.css";
import Hero from "./Component/Hero/Hero";
import Navbar from "./Component/NavBar/Navbar";
import { Suspense, useState } from "react";
import Players from "./Component/Players/Players";
import { DiVim } from "react-icons/di";
import { ToastContainer, Bounce } from "react-toastify";

const fetchPlayers = async () => {
  const response = await fetch("/data.json");
  const data = await response.json();
  return data;
};

function App() {
  const playersData = fetchPlayers();
  const [coin, setCoin] = useState(10000000);

  return (
    <>
      <header className="sticky top-0 z-10">
        <Navbar coin={coin} />
      </header>
      <main className="container mx-auto my-10 space-y-8">
        <Hero />
        <Suspense
          fallback={
            <div className="flex justify-center items-center py-10 gap-5 ">
              <span className="loading loading-spinner loading-md text-info"></span>
              <span className="loading loading-infinity loading-md text-error"></span>
              <span className="loading loading-ball loading-md text-primary"></span>
            </div>
          }
        >
          <Players playersData={playersData} setCoin={setCoin} coin={coin} />
        </Suspense>
      </main>
      <footer className="container mx-auto"></footer>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  );
}

export default App;
