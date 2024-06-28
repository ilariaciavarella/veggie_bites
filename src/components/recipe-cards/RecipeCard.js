import React from 'react'

import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

export default function RecipeCard(props) {
    return (
        <Card className='shadow border-0'>
            <Card.Img variant='top' src={props.image} />
            {props.vegan &&
                <Card.ImgOverlay>
                    <Badge pill bg="tertiary">Vegan friendly</Badge>
                </Card.ImgOverlay>
            }
            <Card.Body>
                <Card.Subtitle>{props.type.slice(0, 1).toUpperCase() + props.type.slice(1).toLowerCase()}</Card.Subtitle>
                <Card.Title className='mt-2 mb-4'>{props.title}</Card.Title>
                <Card.Text><i className="bi bi-clock text-primary me-1"></i> Ready in {props.time} minutes</Card.Text>
            </Card.Body>
        </Card>
    )
}
