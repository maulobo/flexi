import Image from "next/image";
import React from "react";
import style from "./eleginos.module.css";
import fondo from "../../assets/flexi_fondoTRUNCADO.svg";

const Eleginos = () => {
  const elegirnosCards = [
    {
      id: 1,
      image: "",
      alt: "",
      h2: "lorem",
      h3: "lorem2 sfoamjfkaof fasofh asfj asj jcak",
    },
    {
      id: 2,
      image: "",
      alt: "",
      h2: "lorem",
      h3: "lorem2 sfoamjfkaof fasofh asfj asj jcak",
    },
    {
      id: 3,
      image: "",
      alt: "",
      h2: "lorem",
      h3: "lorem2 sfoamjfkaof fasofh asfj asj jcak",
      stylee: style.styleDif,
    },
  ];

  return (
    <div className={style.container}>
      <h2>¿Por qué elegir nuestro servicio de internet?</h2>
      <div className={style.cardsContainer}>
        {elegirnosCards.map(({ h2, h3, stylee, image, alt }) => (
          <article className={style.cards}>
            <Image src={image} alt={alt} />
            <h2>{h2}</h2>
            <h3>{h3}</h3>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Eleginos;
