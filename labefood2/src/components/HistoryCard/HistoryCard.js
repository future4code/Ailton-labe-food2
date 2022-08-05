import React from "react";
import { CardContainer, DataSentense, NamesGreen } from "./styled";

const HistoryCard = ({ item }) => {

  const convertDate = (timestamp) => {
    let time = new Date(timestamp)
    let day = time.getDate().toString().padStart(2, '0')
    let month = (time.getMonth() + 1).toString().padStart(2, '0')
    let year = time.getFullYear()
    `${day} ${month} ${year}`;
  };

  {/* <DescriptionDate>{convertDate(history.createdAt)}</DescriptionDate> */}

  return (
    <CardContainer>
      <NamesGreen>{item.restaurantName}</NamesGreen>
      <DataSentense>05 de agosto de 2022</DataSentense>
      <p>
        <strong>
          SUBTOTAL R$
          {item.totalPrice.toString().includes(".")
            ? item.totalPrice.toString().replace(".", ",")
            : `${item.totalPrice.toString()},00`}
        </strong>
      </p>
    </CardContainer>
  );
};

export default HistoryCard;
