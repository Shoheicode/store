import React from 'react'
import Container from '../global/Container'
import Logo from './Logo'
import NavSearch from './NavSearch'

export default function Navbar() {
  return (
    <Container className='flex flex-col sm:flex-row sm: justify-between gap-4 sm:items-center flex-wrap py-8'>
        <Logo/>
        <NavSearch/>
        <div className='flex gap-4 item-center'>
            
        </div>
    </Container>
  )
}
