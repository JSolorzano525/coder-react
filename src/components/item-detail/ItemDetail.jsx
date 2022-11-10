import React from "react";

export const ItemDetail = ({ data }) => {
  console.log("data = ", data);
  return (
    <div>
      <img src={data.image} alt="" />
      <h2>{data.title}</h2>
      <p>{data.category}</p>
      <button>Comprar</button>
    </div>
  );
};

export default ItemDetail;
