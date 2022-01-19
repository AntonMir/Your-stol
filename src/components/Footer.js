import React from 'react'
// anim on scroll
import 'aos/dist/aos.css'
// style
import styled from 'styled-components'

export default function Footer() {
    return (
        <FooterWrapper>
            <FooterContent>
                <Border></Border>
                <Text>ИП Остапенко Даниил Евгеньевич</Text>
                <Text>ИНН 504815879440</Text>
                <Text>ОГРНИП 319507400005399</Text>
                <Text>Расчетный счёт 40802810740000075920</Text>
            </FooterContent>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.div`
    margin: 50px auto 10px;
`

const FooterContent = styled.div`
    margin: 0 12%;

    @media (max-width: 991px) {
        margin: 0 8%;
    }
`

const Border = styled.div`
    border: 1px solid #00A8A8;
    margin: 0 0 10px 0;
`

const Text = styled.div`
    opacity: 0.7;
    color: #fff;
    font-size: calc(0.2vw + 10px);
    margin-right: 2%;

    @media (min-width: 1920px) {
        font-size: 13.8px;
    }
`