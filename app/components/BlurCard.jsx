import React from "react";
import style from "./blurcard.module.css";

import LogoSVG from "./LogoSVG";

const BlurCard = () => {
  return (
    <div className={style.container}>
      <article className={style.box}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </article>
      <LogoSVG />
    </div>
  );
};

export default BlurCard;
