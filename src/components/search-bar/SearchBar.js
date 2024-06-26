import React from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

export default function SearchBar(props) {
    return (
        <Form inline className='d-flex gap-2'>
            <InputGroup>
                <Form.Control
                    type='search'
                    placeholder='&ldquo;Carrot cake&rdquo;'
                    size={props.size}
                />
                <Button type='submit' className='d-flex align-items-center' size={props.size} variant={props.color}>
                    <i class="bi bi-search"></i>
                </Button>
            </InputGroup>
        </Form>
    )
}
