"use client";
import style from "./cambiar.module.css";
import { motion } from "framer-motion";
export default function MyButton({ text, onEviarData }) {
  const handleClick = (e) => {
    if (
      e.target.value === "Zonas de Cobertura" ||
      e.target.value === "Preguntas frecuentes"
    ) {
      onEviarData(true);
    } else if (e.target.value === "Salir") {
      onEviarData(false);
    }
  };

  return (
    <motion.button
      value={text}
      onClick={handleClick}
      initial={{ x: 400 }}
      animate={{ x: 0 }}
      whileHover={{
        scale: 1.2,
      }}
      whileTap={{ scale: 0.6 }}
      className={style.button}
    >
      {text}
    </motion.button>
  );
}
