import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Form from 'react-bootstrap/esm/Form';

export default function VeganFriendlyFilter() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [checked, setChecked] = useState(searchParams.get('veganFriendly') === 'true');

    function handleFilterChange() {
        setChecked(prev => !prev);
        setSearchParams(prev => ({
            'search': prev.get('search'),
            'veganFriendly': !checked,
            'page': 1
        }))
    }

    return (
        <Form className='w-100 border border-primary bg-primary bg-opacity-25 px-3 py-2 rounded'>
            <Form.Check
                type="switch"
                id="vegan-friendly"
                label="Vegan friendly"
                checked={checked}
                onChange={handleFilterChange}
            />
        </Form>
    )
}
