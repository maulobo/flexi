import React from "react";
import style from "./descubre.module.css";
import MyButton2 from "./MyButton2";

const Descubre = () => {
  return (
    <div className={style.container}>
      <article className={style.box}>
        <div className={style.boxes}>
          <h3>data</h3>
          <MyButton2 text="Cotizar" />
        </div>
      </article>
      <article className={style.box}>
        <div className={style.box2}>
          <h2>Descubre los mejores servicios para tu empresa o pyme</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            corporis quam ex consectetur rerum accusantium aliquam!
            Necessitatibus debitis reiciendis, inventore cumque velit, porro
            aliquam quisquam repudiandae facere assumenda illo beatae.
          </p>
        </div>
        <div className={style.box2}>
          <div className={style.boxes}>
            <h3>data</h3>
            <MyButton2 text="Cotizar" />
          </div>
        </div>
      </article>
    </div>
  );
};

export default Descubre;
