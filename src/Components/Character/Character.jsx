import React from 'react';
import { Link } from 'react-router';

const Character = ({ singlechar }) => {
    const { name, image, id } = singlechar;
    // rounded-lg min-w-[180px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[240px]


    return (

        <Link to={`/char/${id}`}>
            <div className=" bg-[#0B0C2A] border border-[#00FFF0]    mr-4 ">

                <div className="p-2">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-48 object-cover rounded-md p-0.5 "
                    />
                </div>


                <div className="px-4 pb-4 ">
                    <h2 className="text-white  font-semibold">{name}</h2>
                </div>



            </div>
        </Link>

    );
};

export default Character;
