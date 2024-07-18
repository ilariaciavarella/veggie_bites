import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/esm/Button';

export default function RandomButton() {
    const navigate = useNavigate();

    async function handleClick(e) {
        e.preventDefault();
        const client = axios.create({
            baseURL: process.env.REACT_APP_API_BASE_URL
        });
        await client.get(`random?apiKey=${process.env.REACT_APP_API_KEY}&number=1&include-tags=vegetarian`)
            .then(response => response.data.recipes[0].id)
            .then(id => {
                navigate(`/recipes/${id}`)
            })
    }

    return (
        <Button
            className='w-100 mt-2 d-flex align-items-center justify-content-center gap-3'
            variant='outline-secondary'
            size='lg'
            onClick={handleClick}
        >
            <i className='bi bi-shuffle'></i>
            Get a random recipe
        </Button>
    )
}
