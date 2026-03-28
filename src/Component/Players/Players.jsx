import React, { use } from "react";
import { FaFlag, FaUser } from "react-icons/fa";

const Players = ({ playersData }) => {
  const players = use(playersData);
  console.log(players);
  return (
    <div>
      <div>
        <p>Available Players</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card bg-base-100  shadow-sm border border-gray-950">
          <figure className=" container mx-auto p-3">
            <img
              className="rounded-xl"
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <FaUser /> Name
            </h2>
            <div className="flex justify-between items-center gap-4 ">
              <div className="flex justify-between items-center gap-2 ">
                <FaFlag /> Country
              </div>

              <span className="border border-gray-100 bg-gray-50 rounded-md p-1">
                All Rounder
              </span>
            </div>
            <div className="border border-gray-100 w-full"></div>

            <h2 className="card-title">Rating</h2>

            <div className="flex justify-between items-center gap-4 ">
              <div className="card-title flex justify-between items-center gap-2 ">
                Left-Hand Bat
              </div>

              <span className="">Left-Hand Bat</span>
            </div>

            <div className="flex justify-between items-center gap-4 ">
              <div className="card-title flex justify-between items-center gap-2 ">
                Price:$15000000
              </div>

              <span className="btn btn-ghost border border-gray-100 bg-gray-50 rounded-md p-1">
                Choose Player
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Players;
