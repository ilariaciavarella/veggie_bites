import React from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

import { Search } from 'react-bootstrap-icons'
import logo from '../../assets/images/veggie_bites-logo_hor.svg'

export default function NavigationBar() {
    return (
        <Navbar expand='md' className='bg-light justify-content-center
         shadow-sm px-3 py-1'>
            <Navbar.Brand href='./' className='w-75'>
                <img
                    className='d-inline-block mw-100'
                    src={logo}
                    alt='Veggie Bites logo'
                    height='72px'
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' className='ms-auto' />
            <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end py-2 ms-auto'>
                <Form inline>
                    <Stack direction='horizontal' gap={2} >
                        <Form.Control
                            type='search'
                            placeholder='&ldquo;Carrot cake&rdquo;'
                            className='px-3 py-2'
                        />
                        <Button type='submit' className='d-flex align-items-center px-3 py-2' ><Search size={20} className='me-2' /> Search</Button>
                    </Stack >
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}
