  import React from "react";

  const data = [
    {
    id: 1,
    texto: "En Coffe Times  te ofrecemos una gran variedad de",
    },
    {
    id: 2,
    texto:"cafeteras y productos para preparar el café perfecto ",
    },
    {
    id: 3,
    texto: "en la comodidad de tu hogar."
    },
    {
    id: 4,
    texto:"Cafeteras de alta calidad, tazas, cucharitas, filtros y ",
    },
    {
      id: 6,
      texto: " una gran variedad de granos de café de especialidad recién tostados.",
    },
    {
    id: 6,
    texto: " Queremos brindarte los mejores productos para que seas especialista de la cafeteria!",
    },
  ];

function Combotext() {
  return (
    <ul className="texto-combo">
      {data.map((item, index) => (
        <li key={index}>
          <h6>{item.texto}</h6>
        </li>
      ))}
      <button className="btn-combo">Comprar ahora</button> 
    </ul>
  );
}

export default Combotext;
