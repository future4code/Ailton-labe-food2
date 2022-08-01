import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";
import Logo from "../assets/logoFuture.png"

const IntroDisplay = styled.div`
margin: 0;
background-color: black;
color: white;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
const LogoIntro = styled.img`
width: 126px;
height: 65px;
`

export default function Intro () {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate("/login")
    }, 3000)
  }, [])
  return (
    <IntroDisplay>
        <LogoIntro src={Logo}/>
    </IntroDisplay>
  )}