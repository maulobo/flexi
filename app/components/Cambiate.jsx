import React from "react";
import style from "./cambiar.module.css";

import MyButton from "./MyButton";

const Cambiate = () => {
  return (
    <div className={style.container}>
      <div className={style.box1}>
        <div className={style.box}></div>
        <div className={style.box}>
          <article className={style.neonText}>
            <span className={style.letter}>CAMBIATE A</span>
            <span className={style.letter}>FLEXIRED</span>
          </article>
          <article className={style.disfruta}>
            <h3>Y disfruta de tus</h3>
            <h3> series preferidas</h3>
          </article>
          <article>
            <MyButton text="CONECTATE" />
          </article>
        </div>
      </div>
    </div>
  );
};

export default Cambiate;
