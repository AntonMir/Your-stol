import React, { useState } from 'react'
// anim on scroll
import 'aos/dist/aos.css'
// style
import styled from 'styled-components'

export default function Feedback() {

    const [form, setForm] = useState({ name: '', number: '' })

    const changeUserData = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const sendQuestion = async () => {
        try {

            window.Email.send({
                Host: "mail.nic.ru",
                Username: "123123@avtelma.com",
                Password: "Qwerty12",
                To: 'insuran7test@mail.ru',
                From: "123123@avtelma.com",
                Subject: `Заявка от ${form.name}`,
                Body: `
                    <p>Запрос Comfort -стол</p>
                    <h3>Детали:</h3>
                    <ul>  
                    <li>Name: ${form.name}</li>
                    <li>Email: ${form.number}</li>
                    </ul>
                `,
            })
                .then((message) => {
                    console.log(message + "___Succes___")
                });

            // очищаем форму
            setForm({ name: '', number: '' })

        } catch (error) {
            console.log('---', 'Send Question Error:', error.message)
        }
    }


    return (
        <FeedbackWrapper>
            <FeedbackForm>
                <P>
                    Если ты готов стать частью компании Yourstol и развиваться вместе
                    с нами, то оставляй заявку , мы вышлем тебе прайс и расскажем
                    все подробности
                </P>
                <Form>
                    <InputName
                        placeholder='Ваше имя'
                        id="feedback-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={changeUserData}
                    />
                    <InputNumber
                        placeholder='Номер телефона'
                        id="feedback-name"
                        type='number'
                        name="number"
                        value={form.number}
                        onChange={changeUserData}
                    />
                    <Btn onClick={sendQuestion}>Отправить заявку</Btn>
                </Form>
            </FeedbackForm>
        </FeedbackWrapper>
    );
}

const FeedbackWrapper = styled.div`
    max-width: 1440px;
    margin: 90px auto;
    padding: 0 10%;

    @media (max-width: 600px) {
        padding: 0;
    }
`

const FeedbackForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(180deg, #000000 0%, #202020 100%);
    border-radius: 5px;
    color: #fff;
    max-width: 45%;
    padding: 20px 40px; 

    @media (max-width: 991px) {
        max-width: 80%;
        margin: 40px auto;
    }
    @media (max-width: 600px) {
        margin: 40px auto;
        padding: 20px 20px; 
        max-width: 75%;
    }
`

const P = styled.div`
    text-align: center;
    font-size: calc(0.6vw + 10px);
    margin: 25px 0 0;

    @media (min-width: 1920px) {
        font-size: 21.5px;
    }

    @media (max-width: 991px) {
        font-size: calc(1vw + 14px);
    }
`

const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 95%;
    margin: 50px auto 40px;

    @media (max-width: 991px) {
        flex-direction: column;
        width: 100%;
    }

    @media (max-width: 600px) {
        margin: 40px auto;
    }
`

const InputName = styled.input`
    background: #008D92;
    mix-blend-mode: hard-light;
    box-sizing: border-box;
    padding: 20px 20px;
    caret-color: #fff;
    color: #fff;
    border: 1px #50CFB6 solid !important;
    box-shadow: 0 0 5px 1px #50CFB6, inset 0 0 7px 1px #50CFB6 !important;
    border-radius: 3px;
    white-space: nowrap;
    width: 80%;
    margin-bottom: 20px;

    &::placeholder {
        color: #fff;
    }

    @media (max-width: 600px) {
        width: 90%;
    }
`

const InputNumber = styled.input`
    background: #008D92;
    mix-blend-mode: hard-light;
    box-sizing: border-box;
    padding: 20px 20px;
    caret-color: #fff;
    color: #fff;
    border: 1px #50CFB6 solid !important;
    box-shadow: 0 0 5px 1px #50CFB6, inset 0 0 7px 1px #50CFB6 !important;
    border-radius: 3px;
    white-space: nowrap;
    width: 80%;
    margin-bottom: 30px;

    &::placeholder {
        color: #fff;
    }

    @media (max-width: 600px) {
        width: 90%;
    }
`

const Btn = styled.div`
    text-align: center;
    align-self: stretch;
    background: linear-gradient(92.48deg, #009999 15%, #004343 103.51%);
    border-radius: 5px;
    padding: 15px 0;
    margin: 0 auto;
    font-size: calc(0.5vw + 10px);
    font-weight: bold;
    box-shadow: 0 2px 15px 1px #111;
    cursor: pointer;
    width: 80%;

    &:active {
        box-shadow: none;
    }

    @media (min-width: 1920px) {
        font-size: 19.5px;
    }

    @media (max-width: 991px) {
        font-size: calc(1vw + 15px);
    }

    @media (max-width: 600px) {
        width: 90%;
    }
`
