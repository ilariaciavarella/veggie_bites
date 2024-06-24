import React from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

import { Search } from 'react-bootstrap-icons'
import logo from '../../assets/images/veggie_bites-logo_hor.svg'

export default function NavigationBar() {
    return (
        <Navbar bg='tertiary' expand='md' className='shadow-sm px-3 py-1'>
            <Navbar.Brand href='./'>
                <img
                    className='d-inline-block align-top'
                    src={logo}
                    alt='Veggie Bites logo'
                    height='72px'
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
                <Form inline>
                    <Stack direction='horizontal' gap={2}>
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

        // <nav>
        //     <a href='./'>
        //         <img className='nav-logo' src={logo} alt='Veggie Bites logo' />
        //     </a>
        // </nav>
    )
}
