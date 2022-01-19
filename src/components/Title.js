import React from 'react'
// anim on scroll
import 'aos/dist/aos.css'
// style
import styled from 'styled-components'

export default function Title() {
    return (
        <TitleWrapper>
            <Text>
                МАССАЖНОЕ КОСМЕТОЛОГИЧЕСКОЕ ОБОРУДОВАНИЕ
            </Text>
            <Btn><a href='#top'>Опт и сотрудничество</a></Btn>
        </TitleWrapper>
    );
}

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 44%;
    margin: 50px auto 0;

    @media (max-width: 600px) {
        max-width: 90%;
    }
`

const Text = styled.div`
    color: #fff;
    text-align: center;
    line-height: calc(1.2vw + 20px);
    font-size: calc(1vw + 17px);

    @media (min-width: 1920px) {
        font-size: 36.2px;
    }
`

const Btn = styled.div`
    margin: 50px 0 0;
    font-size: calc(1.5vw + 21px);
    font-weight: bold;
    letter-spacing: 1px;
    padding: 26px 60px;
    cursor: pointer;
    border: 1px #50CFB6 solid;
    box-shadow: 0 0 1px 1px #50CFB6, inset 0 0 1px 1px #50CFB6;
    border-radius: 3px;
    white-space: nowrap;

    &:active {
        box-shadow: none;   
    }

    & > a {
        color: #50CFB6;
        text-decoration:none;
        text-shadow: 0 0 20px #50CFB6;
    }

    @media (min-width: 1920px) {
        font-size: 49.8px;
    }

    @media (max-width: 600px) {
        font-size: calc(1.3vw + 18px);
        margin: 35px 0 0;
        padding: 25px 25px;
    }
`
