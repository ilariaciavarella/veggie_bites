import React from 'react'

import Container from 'react-bootstrap/esm/Container'
import Badge from 'react-bootstrap/esm/Badge'
import Stack from 'react-bootstrap/esm/Stack'
import Image from 'react-bootstrap/esm/Image'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

import RecipeCardSmall from '../components/recipe-cards/RecipeCardSmall'

export default function Recipe() {
    return (
        <main className='py-md-5 py-4 px-2'>
            <Container fluid className='px-0 pb-3 border-bottom border-primary border-opacity-25'>
                <h1>Sweet Potato Pie</h1>
                <Stack direction='horizontal' gap={1}>
                    <Badge pill>Dessert</Badge>
                    <Badge pill>Breakfast</Badge>
                    <Badge pill bg='tertiary' >Vegan friendly</Badge>
                </Stack>
            </Container>
            <Container fluid className='px-0 py-4'>
                <p>This sweet potato pie recipe was shared with me by a special friend in Atlanta, GA. It has long been a favorite, and everyone who tastes it says it is the best they've ever had.</p>
                <Image src='https://picsum.photos/seed/picsum/600/400' alt='food image' rounded fluid className='border border-primary border-opacity-25' />
                <Row className='mt-3'>
                    <Col className='border-end border-primary border-opacity-25'>
                        <p className='m-0'>Ready in</p>
                        <p className='m-0 text-uppercase text-primary'><strong>15 minutes</strong></p>
                    </Col>
                    <Col>
                        <p className='m-0'>Servings</p>
                        <p className='m-0 text-uppercase text-primary'><strong>8 people</strong></p>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='p-0'>
                <Row>
                    <Col xs={12} md={6}>
                        <h2>Ingredients</h2>
                        <ul>
                            <li>1 Vegan Pie Crust</li>
                            <li>1 pound sweet potatoes (about 2 medium)</li>
                            <li>3/4 cup full fat coconut milk</li>
                            <li>1 cup brown sugar</li>
                            <li>1 teaspoon pure vanilla extract</li>
                            <li>1 teaspoon ground cinnamon</li>
                            <li>1/4 teaspoon ground ginger</li>
                            <li>1/2 teaspoon ground nutmeg</li>
                            <li>1/4 teaspoon salt</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={6}>
                        <h2>Instructions</h2>
                        <ol>
                            <li>Prepare the Vegan Pie Crust as directed. There is no need to pre-cook the crust. You may also use a store bought vegan crust or this Healthy Vegan Pie Crust for a gluten free, lighter option. Once the pie pan is lined with the uncooked crust, place it in the refrigerator while you prepare the filling.</li>
                            <li>Preheat the oven to 350 degrees F. Peel and chop the sweet potatoes, then place them in a medium saucepan and add enough water to cover. Bring to a boil, then reduce the heat and simmer for 12-15 minutes until fork tender. Drain the potatoes and add them to a large bowl (or a stand mixer if you have one).</li>
                            <li>With a mixer, beat the potatoes until smooth, then add all the remaining ingredients (except the whipped cream!) and beat on high speed until smooth and combined.</li>
                            <li>Spread the sweet potato filling into the pie crust evenly, and bake for 55-60 minutes, until the center is only slightly jiggly. If the crust begins to burn or brown too much, use a pie shield or cover the edges with aluminum foil for the last half of baking.</li>
                            <li>Allow the pie to cool on a cooling rack for about an hour before slicing and serving. Serve with vegan whipped cream, if desired. Store leftover pie in the refrigerator for 5 days. Enjoy!</li>
                        </ol>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='p-0 my-5'>
                <h3>You might also like</h3>
                <Row >
                    <Col xs={6} md={3} >
                        <RecipeCardSmall image='https://picsum.photos/seed/picsum/600/400' title='Raspberry Pie' />
                    </Col>
                    <Col xs={6} md={3} >
                        <RecipeCardSmall image='https://picsum.photos/seed/picsum/600/400' title='Cherry Pie' />
                    </Col>
                    <Col xs={6} md={3} >
                        <RecipeCardSmall image='https://picsum.photos/seed/picsum/600/400' title='Apple Pie' />
                    </Col>
                    <Col xs={6} md={3} >
                        <RecipeCardSmall image='https://picsum.photos/seed/picsum/600/400' title='Ricotta Pie' />
                    </Col>
                </Row>
            </Container>
        </main>
    )
}
