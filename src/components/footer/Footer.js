import React from 'react'

import Stack from 'react-bootstrap/Stack';
import { Instagram, Github, Linkedin } from 'react-bootstrap-icons'

export default function Footer() {
    return (
        <footer
            className='d-flex flex-wrap justify-content-evenly row-gap-3 column-gap-5 align-items-center py-4 px-2 mt-5 mx-3 border-top border-dark'>
            <small className='text-center' >© 2024 Veggie Bites by Ilaria Ciavarella &ndash; All rights reserved</small>
            <Stack direction='horizontal' gap={3}  >
                <a href='https://www.linkedin.com/in/ilaria-ciavarella' className='text-dark' >
                    <Linkedin size={24} />
                </a>
                <a href='https://github.com/ilariaciavarella' className='text-dark' >
                    <Github size={24} />
                </a>
                <a href='https://www.instagram.com/lil.ciavarella/' className='text-dark' >
                    <Instagram size={24} />
                </a>
            </Stack>
        </footer>
    )
}
