import React from 'react'
import styled from 'styled-components'
import heroImg from '../assets/img/hero.jpg'
import fotograf1 from '../assets/img/1.jpg'
import fotograf2 from '../assets/img/2.jpg'
import fotograf3 from '../assets/img/3.jpg'
import fotograf4 from '../assets/img/4.jpg'

const Home = () => {
    return (
        <>
            <Section>
                <Card>
                    <Gorsel src={heroImg} />
                </Card>

                <Card>
                    <Baslik>Spor Salonu</Baslik>
                    <Paragraf>Modern donanımlar ve uzman eğitmen kadrosuyla spor salonumuz, sağlıklı ve aktif bir yaşam için ihtiyacınız olan her şeyi bir arada sunuyor. Kardiyo, ağırlık ve fonksiyonel antrenman alanlarımız, farklı spor seviyelerine ve hedeflere uygun şekilde tasarlandı. İster formunuzu korumak, ister kas kütlenizi artırmak ya da sadece stresten uzaklaşıp daha enerjik hissetmek için buraya gelin, salonumuzda kendinize uygun bir alan mutlaka bulacaksınız.</Paragraf>
                    <Paragraf>Ayrıca kişisel antrenman programları, grup dersleri ve beslenme danışmanlığı ile sadece fiziksel değil, zihinsel olarak da güçlü hissetmenizi hedefliyoruz. Güler yüzlü ekibimiz ve motivasyon dolu atmosferimiz sayesinde spor yapmak sizin için bir alışkanlık değil, keyifli bir yaşam tarzı haline gelecek. Sağlık, enerji ve dinamizm için sizi salonumuzda aramızda görmeyi sabırsızlıkla bekliyoruz!</Paragraf>
                </Card>
            </Section>

            <SectionIki>
                <CardIki>
                    Kadın Spor
                </CardIki>
                <CardIki>
                    Erkek Spor
                </CardIki>
                <CardIki>
                    Çocuk Spor
                </CardIki>
            </SectionIki>


            <SectionIki>
                <Card>
                    <Gorsel src={fotograf1} />
                </Card>
                <Card>
                    <Gorsel src={fotograf2} />
                </Card>
                <Card>
                    <Gorsel src={fotograf3} />
                </Card>
                <Card>
                    <Gorsel src={fotograf4} />
                </Card>
            </SectionIki>
            <SectionIki>
                <Card>
                    <CardUc>
                    <h3>İletişim Bilgileri</h3>
                    <b>Telefon: </b> +90 532 222 11 88 <br/>
                    <b>e-posta: </b> shipeclub@hotmail.com <br/>
                    <b>adres: </b> Fener Kalamış Cd. No:38 Kadıköy/İstanbul <br/>
                    </CardUc>
                </Card>
                <Card>
                    <CardDort>
                        <h3>İletişim Formu</h3>
                        <form>
                            <Input type="text" placeholder='İsim giriniz'/>
                            <Input type="e-posta"placeholder='E-posta giriniz'/>
                            <TextArea placeholder='Mesajınızı giriniz'></TextArea>
                            <Button type='button'>Gönder</Button>

                        </form>
                    </CardDort>
                </Card>
            </SectionIki>
        </>
    )
}

const Section = styled.section`
    display: flex;
    gap: 20px;
    background-color: #938378
`

const SectionIki = styled.section`
    display: flex;
    gap: 20px;
    padding: 30px;
`

const Card = styled.div`
    text-align: center;
    flex: 1;
    color: white;
`

const CardIki = styled.div`
    width: 30%;
    text-align: center;
    border: solid 1px gray;
    background-color: #494e4e;
    color: white;
    padding: 10px;
    border-radius: 10px;
`

const CardUc = styled.div`
    background-color: #494e4e; 
    color: white;
    border: solid 1px gray;
    border-radius: 10px;
    padding: 15px;
`

const CardDort = styled.div`
    background-color: #494e4e;
    color: white;
    border: solid 1px gray;
    border-radius: 10px;
    padding: 15px;
`



const Gorsel = styled.img`
    width: 100%
`

const Baslik = styled.h1`
    font-size: 23px;
    background-color:rgb(119, 125, 125);
    padding: 5px;
    border-radius: 10px;
`

const Paragraf = styled.p`
    font-size: 20px;
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

export default Home
