import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/esm/Card';
import Badge from 'react-bootstrap/esm/Badge';

import fallbackImage from '../../assets/utilities/fallbackImage';

export default function RecipeCard(props) {
    return (
        <Link to={`../recipes/${props.recipeId}`} relative='path' className='text-decoration-none'>
            <Card className='shadow border-0 mb-4'>
                <Card.Img variant='top' src={props.image} alt={props.title + ' picture'} onError={fallbackImage} />
                {props.vegan &&
                    <Card.ImgOverlay>
                        <Badge pill bg="tertiary">Vegan friendly</Badge>
                    </Card.ImgOverlay>
                }
                <Card.Body>
                    <Card.Subtitle className='text-primary' >{props.type.slice(0, 1).toUpperCase() + props.type.slice(1).toLowerCase()}</Card.Subtitle>
                    <Card.Title className='mt-2 mb-4 text-truncate'>{props.title}</Card.Title>
                    <Card.Text><i className="bi bi-clock text-primary me-1"></i> Ready in {props.time} minutes</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}
