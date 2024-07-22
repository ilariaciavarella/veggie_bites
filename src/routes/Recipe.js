import React from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { useLoaderData, useNavigation } from 'react-router-dom';

import Container from 'react-bootstrap/esm/Container';
import Badge from 'react-bootstrap/esm/Badge';
import Stack from 'react-bootstrap/esm/Stack';
import Image from 'react-bootstrap/esm/Image';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Spinner from 'react-bootstrap/esm/Spinner';

import RecipeCardSmall from '../components/recipe-cards/RecipeCardSmall';
import fallbackImage from '../assets/utilities/fallbackImage';

export async function loader({ params }) {
    const client = axios.create({
        baseURL: process.env.REACT_APP_API_BASE_URL
    });
    const recipe = await client.get(`/${params.recipeId}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=false`)
        .then(response => response.data)
        .catch(error => {
            console.log(error.message)
        });
    const similar = await client.get(`/${params.recipeId}/similar?apiKey=${process.env.REACT_APP_API_KEY}&number=4`)
        .then(response => response.data)
        .catch(error => {
            console.log(error.message)
        });
    return { recipe, similar }
}

export default function Recipe() {
    const navigation = useNavigation();
    const { recipe, similar } = useLoaderData();

    const dishTypesBadges = recipe.dishTypes.map(dishType => {
        return (
            <Badge pill key={nanoid()}>{dishType.slice(0, 1).toUpperCase() + dishType.slice(1)}</Badge>
        )
    })

    const ingredients = recipe.extendedIngredients.map(ingredient => {
        return (
            <li key={ingredient.id}>{ingredient.original.slice(0, 1).toUpperCase() + ingredient.original.slice(1)}</li>
        )
    })

    const instructions = recipe.analyzedInstructions[0].steps.map(instruction => {
        return (
            <li key={instruction.number}>{instruction.step}</li>
        )
    })

    const similarRecipesCards = similar.map(similarRecipe => {
        return (
            <Col xs={6} md={3} className='px-1' key={similarRecipe.id}>
                <RecipeCardSmall
                    recipeId={similarRecipe.id}
                    image={`https://img.spoonacular.com/recipes/${similarRecipe.id}-312x231.${similarRecipe.imageType}`}
                    title={similarRecipe.title} />
            </Col>
        )
    })

    return (
        <main className='py-md-5 py-4 px-2 mx-auto' style={{ maxWidth: '1200px' }}>
            {navigation.state === 'loading' ?
                <Spinner animation='border' variant='primary' className='mx-auto' /> :
                <Container fluid className='p-0'>
                    <Container fluid className='pb-3 border-bottom border-primary border-opacity-25'>
                        <h1>{recipe.title}</h1>
                        <Stack direction='horizontal' gap={1}>
                            {recipe.vegan && <Badge pill bg='tertiary' >Vegan friendly</Badge>}
                            {dishTypesBadges}
                        </Stack>
                    </Container>
                    <Container fluid className='my-4'>
                        <Row>
                            <Col xs={12} md={6} >
                                <Row className='mb-3'>
                                    <Col className='border-end border-primary border-opacity-25'>
                                        <p className='m-0'>Ready in</p>
                                        <p className='m-0 text-uppercase text-primary'><strong>{recipe.readyInMinutes} minutes</strong></p>
                                    </Col>
                                    <Col>
                                        <p className='m-0'>Servings</p>
                                        <p className='m-0 text-uppercase text-primary'><strong>{recipe.servings} people</strong></p>
                                    </Col>
                                </Row>
                                <Row>
                                    <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
                                </Row>
                            </Col>
                            <Col xs={12} md={6} >
                                <Image
                                    src={recipe.image}
                                    alt='food image' rounded fluid
                                    className='border border-primary border-opacity-25 w-100'
                                    onError={fallbackImage}
                                />
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid className=''>
                        <Row>
                            <Col xs={12} md={4}>
                                <h2>Ingredients</h2>
                                <ul className='ps-3'>
                                    {ingredients}
                                </ul>
                            </Col>
                            <Col xs={12} md={8}>
                                <h2>Instructions</h2>
                                <ol className='ps-3'>
                                    {instructions}
                                </ol>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid className='my-5'>
                        <h3 className='mb-3'>You might also like</h3>
                        <Row >
                            {similarRecipesCards}
                        </Row>
                    </Container>
                </Container>
            }
        </main>
    )
}
