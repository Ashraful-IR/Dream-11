import React, { use, useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";

const Players = ({ playersData }) => {
  const players = use(playersData);
  console.log(players);

  const [active, setActive] = useState("available");

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-center">
        {active === "available" ? (
          <p className="text-xl font-bold text-black">
            Available Players ({players.length})
          </p>
        ) : (
          <p className="text-xl font-bold text-black">Selected Players</p>
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
            Selected
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((player) => {
          return (
            <div
              key={player.id}
              className="card bg-base-100  shadow-sm border border-gray-950"
            >
              <figure className=" container mx-auto p-3">
                <img
                  className="rounded-xl"
                  src={player.image}
                  alt={player.name}
                />
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
                  <span className="btn btn-ghost border border-gray-100 bg-gray-50 rounded-md p-1">
                    Choose Player
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Players;
