import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/esm/Button'

export default function RandomButton(props) {
    const navigate = useNavigate();
    const [randomId, setRandomId] = useState('');
    const API_KEY = '0b2ddbba35164b8db34eb7bb9074312a';

    const client = axios.create({
        baseURL: "https://api.spoonacular.com/recipes/"
    });

    function handleRandomButton() {
        client.get(`random?number=1&include-tags=vegetarian&apiKey=${API_KEY}`).then((response) => {
            console.log(response.data.recipes);
            setRandomId(response.data.recipes[0].id);
        });
        localStorage.setItem('randomRecipe', randomId);
        // navigate(`/recipes/${randomId}`);
    }

    return (
        <Button
            className='w-100 mt-2 d-flex align-items-center justify-content-center gap-3'
            variant='outline-secondary'
            size='lg'
            onClick={handleRandomButton}
        >
            <i className='bi bi-shuffle'></i>
            Get a random recipe
        </Button>
    )
}
