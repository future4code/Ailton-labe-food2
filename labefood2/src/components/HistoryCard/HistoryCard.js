import React from "react";
import { CardContainer, DataSentense, NamesGreen } from "./styled";

const HistoryCard = ({ item }) => {


  const meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

  const convertDate = (timestamp) => {
    let time = new Date(timestamp)
    let day = time.getDate().toString().padStart(2, '0')
    let month = meses[time.getMonth()]
    let year = time.getFullYear()
    return `${day} de ${month} de ${year}`;
  };
  
  return (
    <CardContainer>
      <NamesGreen>{item.restaurantName}</NamesGreen>
      <DataSentense>{convertDate(item.createdAt)}</DataSentense>
      <p>
        <strong>
          SUBTOTAL R${item.totalPrice?.toFixed(2).replace(".", ",")}
        </strong>
      </p>
    </CardContainer>
  );
};

export default HistoryCard;