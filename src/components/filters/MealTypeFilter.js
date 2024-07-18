import React from 'react';

import Dropdown from 'react-bootstrap/esm/Dropdown';
import Form from 'react-bootstrap/esm/Form';

export default function MealTypeFilter() {
    return (
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
    )
}
