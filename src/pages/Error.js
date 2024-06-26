import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import IconButton from '../components/icon-button/IconButton';

import errorImage from '../assets/images/burnt_bread-404.jpg'

export default function Error() {
    return (
        <main className='flex-grow-1 d-flex align-items-center'>
            <Container fluid className='p-0 mb-5'>
                <Row className='m-0 align-items-center'>
                    <Col xs={12} md={6} className='py-5 px-md-5' >
                        <div>
                            <h1>Oops, something went wrong...</h1>
                            <p>Sorry, the page you are looking for doesn't exist.<br />Return to the home and try another research.</p>
                            <IconButton
                                icon='house'
                                text='Go back home'
                                size='sm'
                                variant='primary'
                                handleClick={() => {
                                    window.location.href = './';
                                }}
                            />
                        </div>
                    </Col>
                    <Col xs={12} md={6} >
                        <img src={errorImage} alt='Burnt slice of bread' className='img-fluid w-100 rounded' />
                    </Col>
                </Row>
            </Container>
        </main>
    )
}
