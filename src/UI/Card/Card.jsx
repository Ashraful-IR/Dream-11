import React, { useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";

const Card = ({
  player,
  setCoin,
  coin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const [selected, setSelected] = useState(false);

  const handleState = () => {
    setSelected(true);
    setSelectedPlayers([...selectedPlayers, player]);
    if (coin < player.price) {
      toast.error(
        `You don't have enough coins to select ${player.playerName}.`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        },
      );
      return coin;
    } else {
      toast.success(
        `You have selected ${player.playerName} for $${player.price}.`,
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,   
        },
      );

      setCoin(coin - player.price);
    }
  };

  return (
    <>
      <div className="card bg-base-100  shadow-sm border border-gray-950">
        <figure className=" container mx-auto p-3">
          <img className="rounded-xl" src={player.image} alt={player.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <FaUser /> {player.playerName}
          </h2>
          <div className="flex justify-between items-center gap-4 ">
            <div className="flex justify-between items-center gap-2 ">
              <FaFlag /> {player.country}
            </div>
            <span className="border border-gray-100 bg-gray-50 rounded-md p-1">
              {player.role}
            </span>
          </div>
          <div className="border border-gray-100 w-full"></div>
          <h2 className="card-title">Rating: {player.rating}</h2>
          <div className="flex justify-between items-center gap-4 ">
            <div className="card-title flex justify-between items-center gap-2 ">
              {player.playingStyle}
            </div>
            <span className="">{player.bowlingStyle}</span>
          </div>
          <div className="flex justify-between items-center gap-4 ">
            <div className="card-title flex justify-between items-center gap-2 ">
              Price: ${player.price}
            </div>
            <button
              className="btn btn-ghost border border-gray-100 bg-gray-50 rounded-md p-1"
              onClick={handleState}
              disabled={selected ? true : false}
            >
              {selected ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
