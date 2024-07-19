import React, { useState } from 'react'
import { Form, useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

export default function SearchBar(props) {
    const navigate = useNavigate();

    const [query, setQuery] = useState('');
    const [isFormInvalid, setIsFormInvalid] = useState(false);

    function handleChange(e) {
        setIsFormInvalid(false)
        setQuery(e.target.value);
    }

    function handleQuerySubmit(e) {
        e.preventDefault();
        if (query.match(/^[a-zA-Z0-9-]+(?:\s+[a-zA-Z0-9-]+)*$/)) {
            localStorage.setItem('storedQuery', query);
            navigate(`/results?search=${query}`)
        } else {
            setIsFormInvalid(true)
        }
    }

    return (
        <Form className='d-flex gap-2' role='search' id='search-form' onSubmit={handleQuerySubmit}>
            <InputGroup>
                <input
                    className={!isFormInvalid ? `form-control form-control-${props.size}` : `form-control form-control-${props.size} is-invalid`}
                    name='search'
                    type='search'
                    placeholder='&ldquo;Carrot cake&rdquo;'
                    value={query}
                    onChange={handleChange}
                    required
                />
                <Button type='submit' className='d-flex align-items-center' size={props.size} variant={props.color}>
                    <i className="bi bi-search"></i>
                </Button>
            </InputGroup>
        </Form>
    )
}
