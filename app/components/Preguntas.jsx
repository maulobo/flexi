import React from "react";
import { motion } from "framer-motion";

const Preguntas = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 2, ease: "easeOut" }}
      style={{
        position: "relative",
      }}
    >
      <h2>Preg1</h2>
      <h2>Preg1</h2>
      <h2>Preg1</h2>
      <h2>Preg1</h2>
      <h2>Preg1</h2>
    </motion.div>
  );
};

export default Preguntas;
