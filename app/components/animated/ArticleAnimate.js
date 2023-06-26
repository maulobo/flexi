"use client";
import style from "../nuestrosServicios.module.css";
import { motion } from "framer-motion";
export default function ArticleAnimate({ id, children }) {
  return (
    <motion.div className={style.child}>
      <motion.article key={id}>{children}</motion.article>
    </motion.div>
  );
}
