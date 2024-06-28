import React from 'react';

import Container from 'react-bootstrap/esm/Container';

import RecipeCard from '../components/recipe-cards/RecipeCard';
import RecipeCardSmall from '../components/recipe-cards/RecipeCardSmall';
import Stack from 'react-bootstrap/esm/Stack';

export default function Results() {
    return (
        <main className='py-md-5 py-4 px-2'>
            <h1>X Results for <em>Query</em></h1>
            <Container fluid>
            </Container>
        </main>
    )
}
