import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.scss';

import Root from './routes/Root';
import Home from './routes/Home';
import Results, { loader as resultsLoader } from './routes/Results';
import Recipe from './routes/Recipe';
import Error from './routes/Error';

import { loader } from "./components/search-bar/SearchBar";

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
                path: 'search?',
                element: <Results />,
                loader: resultsLoader
            },
            {
                path: 'recipes/:recipeid',
                element: <Recipe />
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
