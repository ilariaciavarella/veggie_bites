import React from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/esm/Image';

import SearchBar from '../components/search-bar/SearchBar';
import IconButton from '../components/icon-button/IconButton';

import imageHome from '../assets/images/veggie_bites-waffles-home.png';

export default function Home() {
    const API_KEY = '0b2ddbba35164b8db34eb7bb9074312a';

    const client = axios.create({
        baseURL: "https://api.spoonacular.com/recipes/"
    });

    function handleRandomButton() {
        client.get(`random?number=1&include-tags=vegetarian&apiKey=${API_KEY}`).then((response) => {
            console.log(response.data);
        });
    }

    return (
        <main className='text-light flex-grow-1 d-flex align-items-center home-bg'>
            <Container fluid className='mb-5'>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} >
                        <Image fluid src={imageHome} alt='Waffles' />
                    </Col>
                    <Col xs={12} md={6} className='p-md-5' >
                        <h1 className='mb-4' >Your source for tasty vegetarian recipes</h1>
                        <SearchBar size='lg' color='secondary' />
                        <IconButton
                            icon='shuffle'
                            text='Get a random recipe'
                            size='lg'
                            variant='outline-secondary'
                            handleClick={handleRandomButton}
                            large
                        />
                    </Col>
                </Row>
            </Container>
        </main>
    )
}
