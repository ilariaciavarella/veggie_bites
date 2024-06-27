import React from 'react'
import { useRouteError } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import NavigationBar from '../components/navigation-bar/NavigationBar';
import Footer from '../components/footer/Footer'
import IconButton from '../components/icon-button/IconButton';

import errorImage from '../assets/images/burnt_bread-404.jpg'

export default function Error() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <NavigationBar searchBar={true} />
            <main className='flex-grow-1 d-flex align-items-center'>
                <Container fluid className='p-0 mb-5'>
                    <Row className='m-0 align-items-center'>
                        <Col xs={12} md={6} className='py-5 px-md-5' >
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
