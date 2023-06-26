"use client";
import React, { useRef } from "react";
import style from "./contactanos.module.css";
import Form from "./Form";
import Cardsita from "./Cardsita";
import { BsTelephone, BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";

const cardis = [
  {
    icono: <BsTelephone />,
    info: 321321321,
  },
  {
    icono: <AiOutlineMail />,
    info: "algo@mail.com",
  },
  {
    icono: <FiMapPin />,
    info: "la ubicacion",
  },
];

const Contactanos = () => {
  const parentRef = useRef();
  return (
    <div id="#contacto" className={style.container}>
      <article className={style.arti1}>
        <div className={style.arti2}>
          <h2>Contactate con nosotros</h2>
          <p>
            Completa el formulario para que un asesor te pueda contactar y
            ayudarte a resolver tus dudas o problemas
          </p>
          <p>
            Tambien podes contactarte a traves de nuestros canales, redes
            sociales o direcciones{" "}
          </p>
          <Cardsita
            drag={false}
            icono={<BsWhatsapp />}
            info="3512828282"
            color="#ec661b"
            box="10px 8px 8px rgba(0, 0, 0, 0.4)"
            border="none"
          />
        </div>
        <div className={style.arti2}>
          <Form />
        </div>
      </article>
      <div>
        <article className={style.arti1} ref={parentRef}>
          {cardis.map((el) => (
            <Cardsita
              drag={true}
              icono={el.icono}
              info={el.info}
              parentRef={parentRef}
            />
          ))}
        </article>
      </div>
    </div>
  );
};

export default Contactanos;
