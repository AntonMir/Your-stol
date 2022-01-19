import React from 'react'
//img
import phoneIcon from '@img/phoneIcon.svg'
import instagramIcon from '@img/instagramIcon.svg'
import instagramIconMobile from '@img/instagramIconMobile.svg'
import logo from '@img/logo.jpg'
// anim on scroll
import 'aos/dist/aos.css'
// style
import styled from 'styled-components'

export default function Header() {
    return (
        <HeaderWrapper >
            <Logo src={logo} />
            <HeaderContacts>
                <A href="tel:+74991124658">
                    <Phone >
                        <PhoneIcon src={phoneIcon} alt="Phone icon" />
                        <PhoneNumber> 8(499)112-46-58 </PhoneNumber>
                    </Phone>
                </A>
                <A href='https://www.instagram.com/your_stol/'>
                    <Instagram>
                        <InstaIcon>
                            <source media="(max-width: 991px)" srcSet={instagramIconMobile} />
                            <source media="(min-width: 992px)" srcSet={instagramIcon} />
                            <img src={instagramIcon} alt='instagram' />
                        </InstaIcon>
                        <InstaName>your_stol</InstaName>
                    </Instagram>
                </A>
            </HeaderContacts>
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 30px 0 0 0;

`
const A = styled.a`
    @media (max-width: 1230px) {
        margin-right: 10px;
    }

    @media (max-width: 991px) {
        margin-right: 0;
    }
`

const Logo = styled.img`
    height: auto;
    width: calc(8vw + 80px);

    @media (min-width: 1920px) {
        width: 233.7px;
    }
`

const HeaderContacts = styled.div`
    position: absolute;
    top: calc(10% + 30px);
    right: calc(33% - 260px);
    width: 21%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1230px) {
        flex-direction: column;
        right: calc(33% - 200px);
    }

    @media (max-width: 991px) {
        right: 7%;
        flex-direction: row;
        justify-content: center;
        width: 18%;
    }

    @media (max-width: 400px) {
        width: 18%;
    }
`

const Phone = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    margin-right: 40px;
 
    @media (max-width: 1230px) {
        margin-right: 0;
        margin-bottom: 40px;
    }

    @media (max-width: 991px) {
        margin-bottom: 0;
        pointer-events: none;
    }
    
`

const PhoneIcon = styled.img`
    height: auto;
    width: 29px;
    user-select: none;
    margin-right: 10px;


    @media (max-width: 991px) {
        width: 45px;
    }

    @media (max-width: 350px) {
        width: 40px;
    }
`

const PhoneNumber = styled.div`
    font-size: 18px;
    font-weight: bold;
    white-space: nowrap;
   
    @media (max-width: 991px) {
        display: none;
    }
`

const Instagram = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    background: linear-gradient(180deg, #000000 0%, #202020 100%);
    border-radius: 5px;
    padding: 8px 32px 9px;
    cursor: pointer;

    &:active {
        background: none;
    }

    @media (max-width: 991px) {
        background: none;
        padding: 0;
        border-radius: 0;
        pointer-events: none;
    }
`

const InstaIcon = styled.picture`
    margin-right: 10px;


    & > source, & > img {
        height: auto;
        width: 21px;
        margin-top: 7px;
    }

    @media (max-width: 991px) {
        display: flex;
        flex-direction: column;
        margin-right: 0;
        & > source, & > img {
            width: 45px;
            margin: 0;
        }
    }

    @media (max-width: 350px) {
        & > source, & > img {
            width: 40px;
        }
    }
`

const InstaName = styled.div`
    font-size: 18px;
    font-weight: 400;
    
    @media (max-width: 991px) {
        display: none;
    }
`