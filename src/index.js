import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home"
import Results from "./pages/Results"
import Recipe from "./pages/Recipe"
import Error from "./pages/Error"

import reportWebVitals from './assets/utilities/reportWebVitals';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: "results",
        element: <Results />,
        errorElement: <Error />
    },
    {
        path: "recipe",
        element: <Recipe />,
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
