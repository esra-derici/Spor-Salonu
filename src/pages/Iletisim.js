import React from 'react'
import styled from 'styled-components'

const Iletisim = () => {
  return (
    <Section>
      <Card>
        <h3>İletişim Bilgileri</h3>
        <b>Telefon: </b> +90 532 222 11 88 <br />
        <b>e-posta: </b> shipeclub@hotmail.com <br />
        <b>adres: </b> Fener Kalamış Cd. No:38 Kadıköy/İstanbul <br />
      </Card>
      <Cardiki>
        <h1>İletişim Formu</h1>
        <form>
          <Input type="text" placeholder='İsim giriniz' />
          <Input type="e-posta" placeholder='E-posta giriniz' />
          <TextArea placeholder='Mesajınızı giriniz'></TextArea>
          <Button type='button'>Gönder</Button>
        </form>
      </Cardiki>


    </Section>
  )
}

const Section = styled.section`
  display: flex;
  gap: 10px;
  margin: 30px;
`

const Card = styled.div`
    flex: 1;
    text-align: center;
    border: solid 1px gray;
    background-color: #494e4e;
    color: white;
    padding: 10px;
    border-radius: 10px;
`
const Cardiki = styled.div`
    flex: 3;
    text-align: center;
    border: solid 1px gray;
    background-color: #494e4e;
    color: white;
    padding: 10px;
    border-radius: 10px;

`
const Input = styled.input`
    width: 100%;
    margin-top: 10px;
    border: 0;
    height: 30px;
`

const TextArea = styled.textarea`
    width: 100%;
    margin-top: 10px;
    border: 0;
`
const Button = styled.button`
    width: 100%;
    margin-top: 10px;
    border: 0;
    padding: 5px;
    background-color:rgb(109, 114, 113);
    color: white;
`

export default Iletisim
