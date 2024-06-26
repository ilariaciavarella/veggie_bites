import React from 'react'

import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';

export default function Footer() {
    const iconStyle = {
        fontSize: '1.5rem'
    };

    return (
        <footer
            className='px-3 w-100 mt-auto'>
            <Container fluid className='d-flex flex-wrap justify-content-evenly align-items-center 
            row-gap-3 column-gap-5 py-4 border-top border-dark'>
                <small className='text-center' >© 2024 Veggie Bites by Ilaria Ciavarella &ndash; All rights reserved</small>
                <Stack direction='horizontal' gap={3}  >
                    <a href='https://www.linkedin.com/in/ilaria-ciavarella' className='text-dark' >
                        <i class="bi bi-linkedin" style={iconStyle}></i>
                    </a>
                    <a href='https://github.com/ilariaciavarella' className='text-dark' >
                        <i class="bi bi-github" style={iconStyle}></i>
                    </a>
                    <a href='https://www.instagram.com/lil.ciavarella/' className='text-dark' >
                        <i class="bi bi-instagram" style={iconStyle}></i>
                    </a>
                </Stack>
            </Container>
        </footer>
    )
}
