import React from 'react'

import Card from 'react-bootstrap/esm/Card';

export default function RecipeCardSmall(props) {
    return (
        <Card bg='quaternary' text='light' className='shadow border-0 mb-4'>
            <Card.Img variant='top' src={props.image} />
            <Card.Body>
                <Card.Title className='mt-2 mb-4'>{props.title}</Card.Title>
            </Card.Body>
        </Card>
    )
}
