import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.scss';

import Root from './routes/Root';
import Home from './routes/Home';
import Results from './routes/Results';
import Recipe from './routes/Recipe';
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
                path: 'results',
                element: <Results />
            },
            {
                path: 'recipe',
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
