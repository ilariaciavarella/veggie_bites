import React from 'react'

import Button from 'react-bootstrap/Button';

import errorImage from '../assets/images/burnt_bread-404.jpg'

export default function Error() {
    return (
        <main>
            <div>
                <h1>Oops, something went wrong...</h1>
                <p>Sorry, the page you are looking for doesn't exist.<br />Return to the home and try another research.</p>
                <Button href="./"  >Go back Home</Button>
            </div>
            <img src={errorImage} alt='Burnt slice of bread' />
        </main>
    )
}
