import React from 'react';

import ToggleButton from 'react-bootstrap/esm/ToggleButton';

export default function VeganFriendlyFilter() {
    return (
        <ToggleButton
            id='vegan-friendly'
            type='checkbox'
            variant='outline-primary'
        >
            Vegan friendly
        </ToggleButton>
    )
}
