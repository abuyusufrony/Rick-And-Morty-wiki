import React from 'react';

import { useLoaderData, useParams } from 'react-router';

const Chardetails = () => {
    const { id } = useParams()
    const data = useLoaderData()
    console.log(data)
    const { name, } = data;









    return (
        <div>
            <h2>Dynamic id are : {id}</h2>
            <p>user are : {data.name}</p>




        </div>
    );
};

export default Chardetails;