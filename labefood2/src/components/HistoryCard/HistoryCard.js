import React from 'react';
import { CardContainer, DataSentense, NamesGreen } from "./styled";

const HistoryCard = () => {
  return (
    <CardContainer>
        <NamesGreen>Nome do Restaurante</NamesGreen>
        <DataSentense>22 de agosto 2022</DataSentense>
        <p><strong>SUBTOTAL R$50,00</strong></p>
        </CardContainer>
  )
};

export default HistoryCard;
