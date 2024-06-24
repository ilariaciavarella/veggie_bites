import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.scss';

import Home from './pages/Home';
import Results from './pages/Results';
import Recipe from './pages/Recipe';
import Error from './pages/Error';

import NavigationBar from './components/navigation-bar/NavigationBar';
import Footer from './components/footer/Footer'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: "results",
        element: <Results />
    },
    {
        path: "recipe",
        element: <Recipe />,
    }
])

function App() {


    return (
        <>
            <NavigationBar />
            <RouterProvider router={router} />
            <Footer />
        </>
    );
}

export default App;
