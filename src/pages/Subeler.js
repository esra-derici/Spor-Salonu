import React from 'react'
import styled from 'styled-components'


const Subeler = () => {
  return (
    <Section>
        <Card>
            <h1>Kadıköy Şubesi</h1>
            <p><b>Telefon: </b> +90 545454454</p>
            <p><b>Adres: </b> Kadıköy / Türkiye</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24097.647925334037!2d29.04190039237285!3d40.97697001699502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac79be9af0bb3%3A0x265b6b1e4c1e081!2zR8O2enRlcGUsIDM0NzMwIEthZMSxa8O2eS_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1756247115511!5m2!1str!2str" style={{width: '100%'}} height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </Card>
        <Card>
        <h1>Ataşehir Şubesi</h1>
            <p><b>Telefon: </b> +90 545454455</p>
            <p><b>Adres: </b> Ataşehir / Türkiye</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24093.98559171386!2d29.111316092406394!3d40.98699426198025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac8a7d44b6587%3A0x208a1d8ff0bf7e10!2zQXRhxZ9laGlyLCBBdGF0w7xyaywgMzQ3NTggQXRhxZ9laGlyL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1756247527872!5m2!1str!2str" style={{width: '100%'}} height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Card>

    </Section>
  )
}

const Section = styled.section`
    margin: 20px;
    margin-bottom: 20px;
    display: flex;
    gap: 10px;
`

const Card = styled.div `
    flex: 1;
    background-color: #494e4e;
    padding: 10px;
    border-radius: 10px;
    color: white;
`


export default Subeler
