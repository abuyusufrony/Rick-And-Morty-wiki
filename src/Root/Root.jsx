import React from 'react';
import { Outlet } from 'react-router';
import Banner from '../Banner/Banner';
import Characters from '../Components/Characters/Characters';

const Root = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
            <Characters></Characters>

        </div>
    );
};

export default Root;