import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import { updateQuery } from '../../features/query/querySlice';

export default function SearchBar(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [query, setQuery] = useState('')

    function handleChange(e) {
        setQuery(e.target.value);
    }

    function handleQuerySubmit(e) {
        e.preventDefault();
        dispatch(updateQuery(query.trim()));
        localStorage.setItem('storedQuery', query.trim());
        if (query.trim()) {
            navigate(`/search?query=${encodeURIComponent(query)}`);
        }
    }

    return (
        <Form className='d-flex gap-2' onSubmit={handleQuerySubmit}>
            <InputGroup>
                <Form.Control
                    name='search'
                    type='search'
                    placeholder='&ldquo;Carrot cake&rdquo;'
                    size={props.size}
                    value={query}
                    onChange={handleChange}
                />
                <Button type='submit' className='d-flex align-items-center' size={props.size} variant={props.color}>
                    <i className="bi bi-search"></i>
                </Button>
            </InputGroup>
        </Form>
    )
}
