import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Banner from '../Banner/Banner';

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
}
])

export default Router;