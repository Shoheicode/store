import React from 'react'
import Container from '../global/Container'
import Logo from './Logo'
import NavSearch from './NavSearch'
import CartButton from './CartButton'
import DarkMode from './DarkMode'
import LinksDropdown from './LinksDropdown'

export default function Navbar() {
  return (
    <nav className='border-b'>
        <Container className='flex flex-col sm:flex-row sm: justify-between gap-4 sm:items-center flex-wrap py-8'>
            <Logo/>
            <NavSearch/>
            <div className='flex gap-4 item-center'>
                <CartButton/>
                <DarkMode/>
                <LinksDropdown/>
            </div>
        </Container>
    </nav>
  )
}
