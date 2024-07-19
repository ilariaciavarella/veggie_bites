import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.scss';

import Root from './routes/Root';
import Home from './routes/Home';
import Error from './routes/Error';
import Results, { loader as resultsLoader } from './routes/Results';
import Recipe, { loader as recipeLoader } from './routes/Recipe';

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
                path: 'results',
                element: <Results />,
                loader: resultsLoader
            },
            {
                path: 'recipes/:recipeId',
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
