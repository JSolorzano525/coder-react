import React, { useState, useEffect } from "react";
import ItemDetail from "../item-detail/ItemDetail";
import { useParams } from "react-router-dom";

const productos = [
  {
    id: "1",
    image:
      "https://lasmargaritas.vteximg.com.br/arquivos/ids/1482819-200-200/Cepillo-para-desenredar-Compacto-Babyliss-PRO.jpg?v=637928070727600000",
    title: "Cepillo",
    category: "salud",
  },
  {
    id: "2",
    image:
      "https://www.zamparohnos.com.ar/wp-content/uploads/2018/08/petral.jpg",
    title: "Pretal",
    category: "salud",
  },
  {
    id: "3",
    image:
      "https://www.cordiez.com.ar/arquivos/ids/167874-200-200/Alimento-Para-Perros-Adultos-Carne-Cerdo-Pollo-Y-Vegetales-Dogui-1500-Gr-1-10025.jpg?v=637752873719700000",
    title: "Alimento",
    category: "alimento",
  },
];

const ItemDetailContainer = () => {
  const { idItem } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find((item) => item.id === idItem));
      }, 2000);
    });
    getData.then((res) => {
      setData(res);
      setIsLoading(false);
      console.log("res = ", res);
    });
  }, [idItem]);

  return isLoading ? <div>Loading...</div> : <ItemDetail data={data} />;
};

export default ItemDetailContainer;
