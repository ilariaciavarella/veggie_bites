import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/esm/Card';

export default function RecipeCardSmall(props) {
    return (
        <Link to={`../${props.recipeId}`} relative='path' className='text-decoration-none'>
            <Card bg='quaternary' text='light' className='shadow border-0 mb-2'>
                <Card.Img variant='top' src={props.image} />
                <Card.Body>
                    <Card.Title className='mt-2 mb-4 text-truncate'>{props.title}</Card.Title>
                </Card.Body>
            </Card>
        </Link>
    )
}
