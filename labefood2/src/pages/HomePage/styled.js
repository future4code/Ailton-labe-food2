import styled from "styled-components";
import { InputStyled } from '../../styled'

export const HomeContainer= styled.div`
width:100%;
height:100%;
`
export const NewInput = styled(InputStyled)`
margin-left: 16px;
`
export const FilterContainer = styled.div`
   padding-left: 16px;
    display: flex;
    overflow-x: auto;
    font-family: 'Roboto', sans-serif;
    ::-webkit-scrollbar {
    width: 0px;
    }
`
  export const Filter = styled.p`
    padding: 20px;
    width: 87px;
    `