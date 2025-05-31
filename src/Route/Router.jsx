import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Banner from '../Banner/Banner';
import Chardetails from '../Components/Chardetails/Chardetails';
import Disruptbanner from '../Components/Disruptbanner/Disruptbanner';

const Router = createBrowserRouter([{
    path: '/',
    element: <Root></Root>,
    children: [{
        path: '/',
        element: <h1>Home element</h1>,


    },
    ]


},
{
    path: '/banner',
    element: <Banner></Banner>

},

{

    path: '/char/:id',
    loader: ({ params }) => fetch(`https://rickandmortyapi.com/api/character/${params.id}`),

    element: <Chardetails></Chardetails>


},

{
    path: '/char/:id',
    loader: ({ params }) => fetch(`https://rickandmortyapi.com/api/${params.id}`),

    element: <Chardetails></Chardetails>

},
{
    path: '/disrupt',
    element: <Disruptbanner></Disruptbanner>



},


    // {
    //     path: '/char/:id',
    //     loader: () => fetch('https://rickandmortyapi.com/api/episode'),

    //     element: <Chardetails></Chardetails>

    // }
])

export default Router;