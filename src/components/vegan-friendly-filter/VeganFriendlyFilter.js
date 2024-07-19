import React, { useState } from 'react';

import Form from 'react-bootstrap/esm/Form';

export default function VeganFriendlyFilter() {
    const [checked, setChecked] = useState(false);

    function handleChange() {
        setChecked(prev => !prev);
    }

    return (
        <Form className='w-100 border border-primary bg-primary bg-opacity-25 px-3 py-2 rounded'>
            <Form.Check
                type="switch"
                id="vegan-friendly"
                label="Vegan friendly"
                checked={checked}
                onChange={handleChange}
            />
        </Form>
    )
}
