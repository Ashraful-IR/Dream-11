import React, { use, useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Players = ({ playersData, setCoin, coin }) => {
  const players = use(playersData);
  console.log(players);

  const [active, setActive] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        {active === "available" ? (
          <p className="text-xl font-bold text-black">
            Available Players ({players.length})
          </p>
        ) : (
          <p className="text-xl font-bold text-black">Selected Players ({selectedPlayers.length} / {players.length})</p>
        )}
        <div>
          <button
            className={`btn ${active === "available" ? "bg-[#e7fe29]" : ""} rounded-r-none rounded-l-xl`}
            onClick={() => setActive("available")}
          >
            Available
          </button>
          <button
            className={`btn ${active === "selected" ? "bg-[#e7fe29]" : ""} rounded-r-xl rounded-l-none`}
            onClick={() => setActive("selected")}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {active === "available" ? (
        <AvailablePlayers
          playersData={playersData}
          setCoin={setCoin}
          coin={coin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      ) : (
        <SelectedPlayers
          playersData={playersData}
          selectedPlayers={selectedPlayers} setActive={setActive}
        />
      )}
    </div>
  );
};

export default Players;
