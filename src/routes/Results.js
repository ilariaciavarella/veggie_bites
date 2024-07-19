import React, { useEffect } from 'react';
import { useLoaderData, useSearchParams, useNavigation } from 'react-router-dom';
import axios from 'axios';

import Container from 'react-bootstrap/esm/Container';
import Pagination from 'react-bootstrap/esm/Pagination';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Spinner from 'react-bootstrap/esm/Spinner';

import RecipeCard from '../components/recipe-cards/RecipeCard';
import VeganFriendlyFilter from '../components/vegan-friendly-filter/VeganFriendlyFilter';

export async function loader({ request }) {
    const url = new URL(request.url);
    const query = url.searchParams.get("search");

    const client = axios.create({
        baseURL: process.env.REACT_APP_API_BASE_URL
    });
    let results;
    let numberOfResults;
    await client.get(`complexSearch?query=${query}&diet=vegetarian&addRecipeInformation=true&number=12&apiKey=${process.env.REACT_APP_API_KEY}`)
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
    const [searchParams, setSearchParams] = useSearchParams();

    const numOfPages = Math.ceil(numberOfResults / 12);

    useEffect(() => {
        console.log(results);
        console.log(searchParams.toString())
    }, [])

    const recipesItems = results.map(recipe => {
        return (
            <Col xs={12} md={4} lg={3} key={recipe.id} >
                <RecipeCard
                    recipeId={recipe.id}
                    type={recipe.dishTypes[0] || ''}
                    title={recipe.title} t
                    ime={recipe.readyInMinutes}
                    image={recipe.image}
                    vegan={recipe.vegan} />
            </Col>
        )
    })

    const paginationItems = [];
    for (let i = 0; i < numOfPages; i++) {
        paginationItems.push(
            <Pagination.Item key={i}>
                {i}
            </Pagination.Item>
        )
    };

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
            {numOfPages > 1 &&
                <Pagination className='justify-content-center mt-5'>
                    <Pagination.First />
                    <Pagination.Prev />
                    {paginationItems}
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>}
        </main>
    )
}
