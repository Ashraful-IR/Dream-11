import React from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import { FaUser } from "react-icons/fa";

const SelectedPlayers = ({ selectedPlayers, setActive }) => {
  console.log(selectedPlayers, "selected players");
  return (
    <>
      <div>
        {selectedPlayers.length === 0 ? (
          <div className="flex flex-col justify-between items-center gap-2 border border-gray-100 p-4 rounded-md mb-4 shadow-sm">
            <p className="flex justify-between items-center gap-2">
              <FaUser /> No players selected
            </p>
            <p>Go to available players</p>
          </div>
        ) : (
          selectedPlayers.map((player) => {
            return (
              <div
                key={player.id}
                className="flex border border-gray-100 p-4 rounded-md mb-4 gap-10"
              >
                <div className="flex justify-between items-center rounded-2xl">
                  <img
                    className="w-20 h-20 rounded-full object-cover"
                    src={player.image}
                    alt={player.playerName}
                  />
                </div>
                <div className="flex flex-col justify-between items-start gap-2">
                  <h3> {player.playerName}</h3>
                  <p>{player.playingStyle}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="border border-[#e7fe29] bg-[#ffffff0d] rounded-2xl px-6 py-3 w-60">
        <button
          className="btn btn-soft text-[#000000] border border-[#e7fe29] rounded-xl bg-[#e7fe29] text-[16px] py-3.5 px-5 font-bold"
          onClick={() => setActive("available")}
        >
          Add More Players
        </button>
      </div>
    </>
  );
};

export default SelectedPlayers;
