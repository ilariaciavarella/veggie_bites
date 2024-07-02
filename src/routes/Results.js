import React from 'react';

import Container from 'react-bootstrap/esm/Container';
import Stack from 'react-bootstrap/esm/Stack';
import Pagination from 'react-bootstrap/esm/Pagination';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/esm/Form';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import ToggleButton from 'react-bootstrap/esm/ToggleButton';

import RecipeCard from '../components/recipe-cards/RecipeCard';

export default function Results() {
    return (
        <main className='py-md-5 py-4 px-2'>
            <Container fluid className='pb-3' >
                <h1>X Results for <em>Query</em></h1>
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
                    <Col xs={12} md={4} lg={3} >
                        <RecipeCard type='dessert' title='Apple pie' time='15' image='https://picsum.photos/600/400' />
                    </Col>
                    <Col xs={12} md={4} lg={3} >
                        <RecipeCard type='dessert' title='Apple pie' time='15' image='https://picsum.photos/600/400' />
                    </Col>
                    <Col xs={12} md={4} lg={3} >
                        <RecipeCard type='dessert' title='Apple pie' time='15' image='https://picsum.photos/600/400' />
                    </Col>
                    <Col xs={12} md={4} lg={3} >
                        <RecipeCard type='dessert' title='Apple pie' time='15' image='https://picsum.photos/600/400' />
                    </Col>
                    <Col xs={12} md={4} lg={3} >
                        <RecipeCard type='dessert' title='Apple pie' time='15' image='https://picsum.photos/600/400' />
                    </Col>
                    <Col xs={12} md={4} lg={3} >
                        <RecipeCard type='dessert' title='Apple pie' time='15' image='https://picsum.photos/600/400' />
                    </Col>
                    <Col xs={12} md={4} lg={3} >
                        <RecipeCard type='dessert' title='Apple pie' time='15' image='https://picsum.photos/600/400' />
                    </Col>
                    <Col xs={12} md={4} lg={3} >
                        <RecipeCard type='dessert' title='Apple pie' time='15' image='https://picsum.photos/600/400' />
                    </Col>
                    <Col xs={12} md={4} lg={3} >
                        <RecipeCard type='dessert' title='Apple pie' time='15' image='https://picsum.photos/600/400' />
                    </Col>
                    <Col xs={12} md={4} lg={3} >
                        <RecipeCard type='dessert' title='Apple pie' time='15' image='https://picsum.photos/600/400' />
                    </Col>
                    <Col xs={12} md={4} lg={3} >
                        <RecipeCard type='dessert' title='Apple pie' time='15' image='https://picsum.photos/600/400' />
                    </Col>
                    <Col xs={12} md={4} lg={3} >
                        <RecipeCard type='dessert' title='Apple pie' time='15' image='https://picsum.photos/600/400' />
                    </Col>

                </Row>
            </Container>
            <Pagination className='justify-content-center mt-5'>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item >{14}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </main>
    )
}
