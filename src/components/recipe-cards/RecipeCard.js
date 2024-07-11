import React from 'react';

import Card from 'react-bootstrap/esm/Card';
import Badge from 'react-bootstrap/esm/Badge';

import fallbackImage from '../../assets/images/veggie_bites-no_image.jpg'

export default function RecipeCard(props) {
    function replaceImage({ currentTarget }) {
        currentTarget.onerror = null;
        currentTarget.src = fallbackImage;
    }

    return (
        <Card className='shadow border-0 mb-4'>
            <Card.Img variant='top' src={props.image} alt={props.title + ' picture'} onError={replaceImage} />
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
    )
}
