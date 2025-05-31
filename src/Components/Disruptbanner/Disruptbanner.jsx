import React from 'react';

const Disruptbanner = () => {
    return (
        <div>
            <section className="bg-gradient-to-tr"
                style={{
                    backgroundImage:
                        'linear-gradient(135deg, #f5f8ff 4%,rgb(234, 217, 250) 103%)',
                }}
            >
                <div className="max-w-[1440px] mx-auto px-12 py-36">
                    <h1 className="text-6xl text-[#68479d]">Working with Disrupt.com</h1>
                    <div className="my-8 w-3/4">
                        <p>Working at Disrupt.com is not for spectators. It’s for those who thrive in fast-moving, high-impact environments—where learning never stops, where AI is not a threat but an amplifier, and where challenges push us to grow.</p>
                    </div>
                    <button
                        className="bg-gradient-to-tr px-4 py-2 rounded-4xl text-white font-bold"
                        style={{
                            backgroundImage:
                                'linear-gradient(135deg,rgb(206, 165, 249) 4%,rgb(154, 191, 245) 103%)',
                        }}
                    >Learn More</button>
                </div>




            </section>
        </div>
    );
};

export default Disruptbanner;