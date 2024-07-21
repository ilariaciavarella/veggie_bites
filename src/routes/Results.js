import React, { useEffect } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import axios from 'axios';

import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Spinner from 'react-bootstrap/esm/Spinner';

import RecipeCard from '../components/recipe-cards/RecipeCard';
import VeganFriendlyFilter from '../components/vegan-friendly-filter/VeganFriendlyFilter';
import ResultsPagination from '../components/results-pagination/ResultsPagination';

export async function loader({ request }) {
    const url = new URL(request.url);
    const query = url.searchParams.get('search');
    const diet = url.searchParams.get('veganFriendly') === 'true' ? 'vegan' : 'vegetarian';
    const offset = (url.searchParams.get('page') - 1) * 12;

    const client = axios.create({
        baseURL: process.env.REACT_APP_API_BASE_URL
    });
    let results;
    let numberOfResults;
    await client.get(`complexSearch?query=${query}&diet=${diet}&addRecipeInformation=true&number=12&offset=${offset}&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(response => {
            results = response.data.results;
            numberOfResults = response.data.totalResults;
        })
        .catch(error => {
            console.log(error.message)
        });
    return { query, results, numberOfResults }
}

export default function Results() {
    const navigation = useNavigation();
    const { query, results, numberOfResults } = useLoaderData();

    useEffect(() => {
        console.log(results);
    }, [])

    const recipesItems = results.map(recipe => {
        return (
            <Col xs={12} md={4} lg={3} key={recipe.id} >
                <RecipeCard
                    recipeId={recipe.id}
                    type={recipe.dishTypes[0] || 'Not specified'}
                    title={recipe.title}
                    time={recipe.readyInMinutes}
                    image={recipe.image}
                    vegan={recipe.vegan} />
            </Col>
        )
    })

    return (
        <main className='py-md-5 py-4 px-2'>
            <Container fluid className='pb-3' >
                <Row>
                    <Col xs={12} md={9}>
                        <h1>{numberOfResults || 0} Results for <em>{query.slice(0, 1).toUpperCase() + query.slice(1)}</em></h1>
                    </Col>
                    <Col xs={12} md={3}>
                        <VeganFriendlyFilter />
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    {navigation.state === 'loading' ? <Spinner animation='border' variant='primary' className='mx-auto' /> : recipesItems}
                </Row>
            </Container>
            {numberOfResults > 12 && navigation.state !== 'loading' && <ResultsPagination numberOfResults={numberOfResults} />}
        </main>
    )
}
