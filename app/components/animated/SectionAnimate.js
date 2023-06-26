"use client";
import { useRef } from "react";
import style from "../beneficios.module.css";
import { motion, useInView } from "framer-motion";

export default function SectionAnimate() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: " -200px", once: true });

  return (
    <div ref={ref} className={style.boxContent}>
      <motion.section animate={{ x: isInView ? 0 : -1000 }}>
        <div>
          <h2>Sos cliente de flexired?</h2>
          <h4>Conoce nuestros beneficios</h4>
        </div>
      </motion.section>
    </div>
  );
}
