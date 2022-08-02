import styled from 'styled-components'
import { midGreen, greyish } from '../../constants/color'

export const Container = styled.div`
width: 328px;
height: 188;
font-family: "Roboto";
font-size: 16px;
letter-spacing: -0.39px;
margin-left: 16px;
margin-top: 8px;
border-left:  solid 1px ${greyish};
border-right:  solid 1px ${greyish};
border-bottom: solid 1px ${greyish};
border-radius: 8px;
`
export const DivImg = styled.img`
width: 100%;
height: 120px;
border-radius: 8px 8px 0 0 ;

`
export const DivText = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding-left: 16px;
padding-right: 16px;
`
export const RestName = styled.p`
color: ${midGreen};
padding-left: 16px;
padding-top: 12px;
padding-bottom: 4px;
`
export const ColorText = styled.p`
color: ${greyish}

`
export const ContainerText = styled.div`
height: 68px;
`