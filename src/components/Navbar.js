import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <NavbarMenu>
        <UlMenu>
            <li><LinkMenu to="/">Anasayfa</LinkMenu></li>
            <li><LinkMenu to="/subeler">Şubeler</LinkMenu></li>
            <li><LinkMenu to="/iletisim">İletişim</LinkMenu></li>
        </UlMenu>
    </NavbarMenu>
  )
}

const NavbarMenu = styled.nav`
    background-color: #162127;
    padding: 10px;
`

const UlMenu = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`

const LinkMenu = styled(Link)`
    text-decoration: none;
    color: white;
`

export default Navbar
