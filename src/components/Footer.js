import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterCard>
        <Paragraf>by esra derici</Paragraf>
    </FooterCard>
  )
}

const FooterCard = styled.footer`
    background-color: #162127;
    padding: 10px;
`

const Paragraf = styled.p`
    color: white;
    text-align: center;

`

export default Footer
