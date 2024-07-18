import React from 'react';

import Dropdown from 'react-bootstrap/esm/Dropdown';
import Form from 'react-bootstrap/esm/Form';

export default function IntolerancesFilter() {
    return (
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
    )
}
