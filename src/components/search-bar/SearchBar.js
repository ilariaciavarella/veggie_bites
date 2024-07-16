import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Form, useNavigate, useSearchParams } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import { updateQuery } from '../../features/query/querySlice';

export default function SearchBar(props) {
    const [searchParams, setSearchParams] = useSearchParams();

    const [query, setQuery] = useState('');
    const [isFormInvalid, setIsFormInvalid] = useState(false);

    function handleChange(e) {
        setIsFormInvalid(false)
        setQuery(e.target.value);
    }

    function handleQuerySubmit(e) {
        e.preventDefault();
        if (query.match(/^[a-zA-Z0-9-]+(?:\s+[a-zA-Z0-9-]+)*$/)) {
            setSearchParams(query);
        } else {
            setIsFormInvalid(true)
        }
    }

    return (
        <Form className='d-flex gap-2' role='search' id='search-form' action='/search'>
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
