import React from 'react'

import Button from 'react-bootstrap/esm/Button'

export default function IconButton(props) {
    return (
        <Button
            className={`${props.large && 'w-100'} mt-2 d-flex align-items-center justify-content-center gap-3`}
            variant={props.variant}
            size={props.size}
            onClick={props.handleClick}
        >
            <i className={`bi bi-${props.icon}`} ></i>
            {props.text}
        </Button>
    )
}
