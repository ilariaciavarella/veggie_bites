import React from 'react'

import Navbar from 'react-bootstrap/Navbar';

import SearchBar from '../search-bar/SearchBar'

import logo from '../../assets/images/veggie_bites-logo_hor.svg'

export default function NavigationBar(props) {
    return (
        <Navbar expand='md' className='bg-light justify-content-between
         shadow-sm px-3 py-1'>
            <Navbar.Brand href='./' >
                <img
                    className='d-block'
                    src={logo}
                    alt='Veggie Bites logo'
                    height='60px'
                />
            </Navbar.Brand>
            {props.searchBar && <Navbar.Toggle aria-controls='basic-navbar-nav' />}
            {props.searchBar &&
                <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end py-2'>
                    <SearchBar size='sm' color='primary' />
                </Navbar.Collapse>
            }
        </Navbar >
    )
}