import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/esm/Button'

export default function RandomButton() {
    const [randomId, setRandomId] = useState('');

    useEffect(() => {
        const client = axios.create({
            baseURL: process.env.REACT_APP_API_BASE_URL
        });

        client.get(`random?apiKey=${process.env.REACT_APP_API_KEY}&number=1&include-tags=vegetarian`).then((response) => {
            console.log(response.data.recipes);
            setRandomId(response.data.recipes[0].id);
        });
    }, [])


    return (
        <Link to={`../recipes/${randomId}`} relative='path' className='text-decoration-none'>
            <Button
                className='w-100 mt-2 d-flex align-items-center justify-content-center gap-3'
                variant='outline-secondary'
                size='lg'
            >
                <i className='bi bi-shuffle'></i>
                Get a random recipe
            </Button>
        </Link>
    )
}
