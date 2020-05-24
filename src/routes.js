import React from 'react';

import Home from './pages/Home';
import Posts from './pages/Posts';
import SinglePost from './components/Single_Post';

const routes = [
    {
        path: '/posts/:id',
        component: <SinglePost />,
        exact: true
    },
    {
        path: '/posts',
        component: <Posts />,
        exact: true
    },
    {
        path: '/',
        component: <Home />,
        exact: true
    },
];

export default routes;
