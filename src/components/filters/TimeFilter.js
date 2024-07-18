import React from 'react';

import Dropdown from 'react-bootstrap/esm/Dropdown';
import Form from 'react-bootstrap/esm/Form';

export default function TimeFilter() {
    return (
        <Dropdown autoClose='outside' >
            <Dropdown.Toggle id='time-dropdown' variant='outline-primary'>
                Time to prepare
            </Dropdown.Toggle>
            <Dropdown.Menu className='p-3'>
                <Form.Range />
            </Dropdown.Menu>
        </Dropdown>
    )
}
