import React from "react";
import { motion } from "framer-motion";
import style from "./contactanos.module.css";
import { IconContext } from "react-icons";

const Cardsita = ({ icono, info, parentRef, drag, color, box, border }) => {
  return (
    <div className={style.cont}>
      <motion.div
        style={{
          backgroundColor: color,
          boxShadow: box,
          border: border,
        }}
        className={style.cardi}
        drag={drag}
        dragConstraints={parentRef}
      >
        <IconContext.Provider value={{ size: 50 }}>
          <span>{icono}</span>
        </IconContext.Provider>
        <h5>{info}</h5>
      </motion.div>
    </div>
  );
};

export default Cardsita;
