import React, { useEffect, useState } from 'react';

const Characters = () => {

    const [char, setchar] = useState([])
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then((res) => res.json())
            .then((data) => setchar(data.results))
            .catch((err) => console.log("err", err))

    }, [])
    return (
        <div>
            <h2>here we are fetching all data</h2>

            <p>total charctere are : {char.length}</p>
            <div className=" bg-gradient-to-br from-[#0A0A0A]/90 via-[#060022]/80 to-[#000000]/90 ">

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deserunt laboriosam quibusdam voluptas reprehenderit mollitia doloremque quam facilis perspiciatis nobis nisi dolorem numquam eum quasi distinctio et, tenetur vitae quisquam cum ullam itaque error. Minus quas amet quibusdam asperiores libero, adipisci velit nostrum harum. Eum numquam architecto natus facilis repudiandae illo quas modi corporis culpa sint facere officia provident suscipit error, iusto fuga obcaecati voluptate, inventore quo quaerat expedita explicabo id, reprehenderit iure. Atque voluptate voluptatem quis, vitae excepturi voluptas repellendus esse optio animi nostrum veritatis modi. Reprehenderit, quod tempore! Voluptatibus corrupti eos deleniti eaque, beatae earum? Sint, eos reiciendis.</p>

                <div className='flex'>
                    {
                        char.map((singlechar) => <div >
                            <div><img className='w-36  h-18 p-3.5' src={singlechar.image} alt={singlechar.className} /></div>

                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Characters;