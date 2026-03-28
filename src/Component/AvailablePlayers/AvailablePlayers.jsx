import React, { use } from "react";
import { FaFlag, FaUser } from "react-icons/fa";
import Card from "../../UI/Card/Card";

const AvailablePlayers = ({
  playersData,
  setCoin,
  coin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const players = use(playersData);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((player) => {
          return (
            <div key={player.id}>
              <Card
                player={player}
                setCoin={setCoin}
                coin={coin}
                selectedPlayers={selectedPlayers}
                setSelectedPlayers={setSelectedPlayers}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AvailablePlayers;
