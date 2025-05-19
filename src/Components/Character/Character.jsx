import React from 'react';

const Character = ({ singlechar }) => {
    const { name, image } = singlechar;


    return (
        <div>
            <div className="relative bg-[#0B0C2A] border border-[#00FFF0] rounded-lg min-w-[180px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[240px] mr-4 overflow-hidden">

                <div className="p-2">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-48 object-cover rounded-md"
                    />
                </div>


                <div className="px-4 pb-4 text-center">
                    <h2 className="text-white text-base font-semibold">{name}</h2>
                </div>



            </div>
        </div>
    );
};

export default Character;
