import React from 'react'
import './NavigationBar.css'

import logo from '../../assets/images/veggie_bites-logo_hor.svg'

export default function NavigationBar() {
    return (
        <nav>
            <a href='./'>
                <img src={logo} alt='Veggie Bites logo' />
            </a>
        </nav>
    )
}
