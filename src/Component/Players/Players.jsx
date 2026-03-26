import React, { use } from 'react';

const Players = ({playersData}) => {
    const players = use(playersData);
    console.log(players);
    return (
        <div>
            <div>
                <p>
                    Available Players
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

            </div>
        </div>
    );
};

export default Players;