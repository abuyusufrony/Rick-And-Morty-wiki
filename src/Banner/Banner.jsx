import React from 'react';
import banner from '../assets/Неон город вверх 1.png';
import logo from '../assets/portal.png';
import bubble from '../assets/bubble.png';
import six from '../assets/Logo.png';

const Banner = () => {
    return (
        <div className="relative min-h-screen overflow-hidden ">

            <img
                src={banner}
                alt="background"
                className="absolute  w-full h-full object-cover "
            />


            <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A]/90 via-[#060022]/80 to-[#000000]/90 z-10"></div>


            <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 pt-28 pb-16 text-white">

                <img src={six} alt="Rick and Morty Logo" className="mb-4 w-[200px] md:w-[250px]" />

                <div className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-extrabold">
                    <img src={bubble} className="absolute left-[-30px] top-[-20px] w-10 sm:w-12" alt="blob" />
                    <span className="italic" style={{ fontFamily: 'TTTravelsItalic' }}>THE</span>{" "}
                    <img src={logo} alt="Rick" className="inline-block w-10 sm:w-12 h-auto mx-2 align-middle" />
                    <span className="text-[#00FFCB]" style={{ fontFamily: 'TTTravelsBold' }}>RICK &</span><br />
                    <span className="text-[#A0FF00]" style={{ fontFamily: 'TTTravelsBold' }}>MORTY</span>{" "}
                    <span className="italic" style={{ fontFamily: 'TTTravelsItalic' }}>WIKI</span>
                </div>




                <div className="mt-8 flex flex-col items-start text-left md:flex-row md:items-center md:justify-center md:space-x-10">

                    <p
                        className="text-sm text-gray-300 font-medium  order-1 md:order-2 md:ml-14  "
                        style={{ fontFamily: 'TTTravels' }}
                    >
                        Brilliant but boozy scientist Rick hijacks his fretful  <br />teenage grandson, Morty, for wild escapades <br /> in other worlds and alternate dimensions.
                    </p>


                    <button className="mt-4 md:mt-0 cursor-pointer bg-[#00FFCB] px-6 py-2 rounded-full text-black font-semibold hover:bg-[#00e6b3] transition-all order-2 md:order-1 md:mr-2.5">
                        ▶ Watch Now
                    </button>
                </div>




            </div>
        </div>
    );
};

export default Banner;
