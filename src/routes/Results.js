import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import Container from 'react-bootstrap/esm/Container';
import Stack from 'react-bootstrap/esm/Stack';
import Pagination from 'react-bootstrap/esm/Pagination';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/esm/Form';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import ToggleButton from 'react-bootstrap/esm/ToggleButton';

import RecipeCard from '../components/recipe-cards/RecipeCard';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
    const API_KEY = '0b2ddbba35164b8db34eb7bb9074312a';
    const client = axios.create({
        baseURL: "https://api.spoonacular.com/recipes/"
    });
    const results = await client.get(`complexSearch?query=beans&diet=vegetarian&addRecipeInformation=true&number=12&apiKey=${API_KEY}`).then(response => response.data.results);
    const numberOfResults = await client.get(`complexSearch?query=beans&diet=vegetarian&addRecipeInformation=true&number=12&apiKey=${API_KEY}`).then(response => response.data.totalResults);
    return { results, numberOfResults }
}

export default function Results() {
    const query = useSelector((state) => state.query.value);
    const { results, numberOfResults } = useLoaderData();

    const numOfPages = Math.ceil(numberOfResults / 12);

    useEffect(() => {
        // client.get(`complexSearch?query=${query}&diet=vegetarian&addRecipeInformation=true&number=12&apiKey=${API_KEY}`).then((response) => {
        //     setRecipesList(response.data.results);
        //     setNumOfResults(response.data.totalResults);
        //     console.log(response.data.results);
        // });
        console.log(results)
    }, [])

    const recipesItems = results.map(recipe => {
        return (
            <Col xs={12} md={4} lg={3} key={recipe.id} >
                <RecipeCard recipeId={recipe.id} type={recipe.dishTypes[0]} title={recipe.title} time={recipe.readyInMinutes} image={recipe.image} vegan={recipe.vegan} />
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
                <h1>{numberOfResults || 0} Results for <em>{query.slice(0, 1).toUpperCase() + query.slice(1)}</em></h1>
                <Stack direction='horizontal' gap={3} className='mt-5'>
                    <ToggleButton
                        id='vegan-friendly'
                        type='checkbox'
                        variant='outline-primary'
                    >
                        Vegan friendly
                    </ToggleButton>
                    <Dropdown autoClose='outside' >
                        <Dropdown.Toggle id='intolerances-dropdown' variant='outline-primary'>
                            Intolerances
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='p-3'>
                            <Form.Check
                                type='checkbox'
                                id='lactose'
                                label='Lactose'
                            />
                            <Form.Check
                                type='checkbox'
                                id='nuts'
                                label='Nuts'
                            />
                            <Form.Check
                                type='checkbox'
                                id='gluten'
                                label='Gluten'
                            />
                        </Dropdown.Menu>

                    </Dropdown>
                    <Dropdown autoClose='outside' >
                        <Dropdown.Toggle id='time-dropdown' variant='outline-primary'>
                            Time to prepare
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='p-3'>
                            <Form.Range />
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown autoClose='outside' >
                        <Dropdown.Toggle id='meals-dropdown' variant='outline-primary'>
                            Meal types
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='p-3'>
                            <Form.Check
                                type='checkbox'
                                id='Breakfast'
                                label='Breakfast'
                            />
                            <Form.Check
                                type='checkbox'
                                id='Lunch'
                                label='Lunch'
                            />
                            <Form.Check
                                type='checkbox'
                                id='Dinner'
                                label='Dinner'
                            />
                            <Form.Check
                                type='checkbox'
                                id='Snack'
                                label='Snack'
                            />
                        </Dropdown.Menu>
                    </Dropdown>
                </Stack>
            </Container>
            <Container fluid>
                <Row>
                    {recipesItems}
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
