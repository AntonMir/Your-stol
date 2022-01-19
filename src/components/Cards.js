import React from 'react'
// img
import Distribution from '@img/distribution.png'
import Opt from '@img/opt.png'
import Dropshipping from '@img/dropshipping.png'
// anim on scroll
import 'aos/dist/aos.css'
// style
import styled from 'styled-components'

export default function Cards() {
    return (
        <CardsWrapper>
            <CardEl>
                <Img src={Distribution} alt="Distribution" />
                <Border></Border>
                <Title>Дистрибьюция</Title>
                <Btn>Что это?</Btn>
            </CardEl>
            <CardEl>
                <Img src={Opt} alt="Opt" />
                <Border></Border>
                <Title>ОПТ</Title>
                <Btn>Что это?</Btn>
            </CardEl>
            <CardEl>
                <Img src={Dropshipping} alt="Dropshipping" />
                <Border></Border>
                <Title>Дропшиппинг</Title>
                <Btn>Что это?</Btn>
            </CardEl>

        </CardsWrapper>
    );
}

const CardsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1440px;
    margin: 50px auto;
    padding: 0 10%;
    
    @media (max-width: 991px) {
        flex-direction: column;
        padding: 0;
    }
`

const CardEl = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    background: linear-gradient(180deg, #000000 0%, #202020 100%);
    border-radius: 5px;
    padding: 45px 50px;
    margin: 0 10px;

    @media (max-width: 1350px) {
        padding: 45px 30px;
    }

    @media (max-width: 991px) {
        margin: 20px 0;
        padding: 35px 30px;
        width: 65%;
    }

    @media (max-width: 600px) {
        width: 70%;
    }
`
const Img = styled.img`
    height: auto;
    width: calc(15vw + 35px);
    margin-bottom: 10px;

    @media (min-width: 1920px) {
        width: 323px;
    }

    @media (max-width: 991px) {
        width: calc(30vw + 90px);
    }

`
const Border = styled.span`
    align-self: stretch;
    border-bottom: 1px solid #50CFB6;
    opacity: 0.3;
`
const Title = styled.p`
    line-height: calc(1vw + 15px);
    font-size: calc(0.8vw + 12px);

    @media (min-width: 1920px) {
        line-height: 34px;
        font-size: 27.3px;
    }

    @media (max-width: 991px) {
        font-size: calc(1.5vw + 17px);
    }

`
const Btn = styled.div`
    text-align: center;
    align-self: stretch;
    background: linear-gradient(92.48deg, #009999 15%, #004343 103.51%);
    border-radius: 5px;
    padding: 15px 0;
    font-size: calc(0.5vw + 10px);
    font-weight: bold;
    box-shadow: 0 2px 15px 1px #111;
    cursor: pointer;

    &:active {
        box-shadow: none;
    }

    @media (min-width: 1920px) {
        font-size: 19.5px;
    }

    @media (max-width: 991px) {
        font-size: calc(1vw + 15px);
    }
`