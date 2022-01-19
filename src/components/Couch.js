import React from 'react'
// img
import CouchImg from '@img/couch.png'
// anim on scroll
import 'aos/dist/aos.css'
// style
import styled from 'styled-components'

export default function Couch() {
    return (
        <CouchWrapper>
            <img src={CouchImg} alt="" />
        </CouchWrapper>
    );
}

const CouchWrapper = styled.div`
    position: absolute;
    top: 55%;
    right: -10%;
    z-index: 1;

    & > img {
        width: 60vw;
        height: auto;
        max-width: 1152px;
    }

    @media (min-width: 1920px) {
        top: auto;
        bottom: -300px;
        right: -200px;
    }

    @media (max-width: 1440px) {
        top: 60%;
    }

    @media (max-width: 991px) {
        top: 91%;
        right: -7%;

        & > img {
            width: 50vw;
            height: auto;
        }
    }

    @media (max-width: 600px) {
        top: 92.5%;
    }
`
