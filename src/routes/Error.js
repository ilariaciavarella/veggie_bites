import React from 'react'
import { useRouteError } from 'react-router-dom';

import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/esm/Image';
import Button from 'react-bootstrap/esm/Button';

import NavigationBar from '../components/navigation-bar/NavigationBar';
import Footer from '../components/footer/Footer'

import errorImage from '../assets/images/burnt_bread-404.jpg'

export default function Error() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <NavigationBar searchBar={true} />
            <main className='flex-grow-1 d-flex align-items-center py-md-5 py-4'>
                <Container fluid className='p-0 mb-5'>
                    <Row className='m-0 align-items-center'>
                        <Col xs={12} md={6} className='py-5 px-md-5' >
                            <h1>Oops, something went wrong...</h1>
                            <small className='opacity-50 fst-italic'>{error.statusText || error.message}</small>
                            <p>Sorry, an unexpected error has occurred.<br />Return to the home and try another research.</p>
                            <Button
                                className='mt-2 d-flex align-items-center justify-content-center gap-3'
                                variant='primary'
                                size='sm'
                                onClick={() => {
                                    window.location.href = './';
                                }}
                            >
                                Go back home
                            </Button>
                        </Col>
                        <Col xs={12} md={6} >
                            <Image src={errorImage} alt='Burnt slice of bread' fluid rounded />
                        </Col>
                    </Row>
                </Container>
            </main>
            <Footer dark={true} />
        </>
    )
}
