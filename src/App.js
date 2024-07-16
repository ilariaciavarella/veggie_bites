import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.scss';

import Root from './routes/Root';
import Home from './routes/Home';
import Results, { loader as resultsLoader } from './routes/Results';
import Recipe, { loader as recipeLoader } from './routes/Recipe';
import Error from './routes/Error';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'search',
                element: <Results />,
                loader: resultsLoader
            },
            {
                path: 'recipes/:recipeid',
                element: <Recipe />,
                loader: recipeLoader
            }
        ]
    },
])

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
