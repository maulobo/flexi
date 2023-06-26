import MyButton from "./MyButton";
import MyButton2 from "./MyButton2";
import ArticleAnimate from "./animated/ArticleAnimate";
import style from "./nuestrosServicios.module.css";

const boxes = [
  {
    id: 1,
    info: "aca va la info",
    buton: <MyButton text="PIDE AHORA" />,
  },
  {
    id: 2,
    info: "aca va la info",
    buton: <MyButton2 text="PIDE AHORA" />,
    styless: style.card,
  },
  {
    id: 3,
    info: "aca va la info",
    buton: <MyButton text="PIDE AHORA" />,
  },
];

export default function NuestrosServicios() {
  return (
    <div className={style.container} id="servicios">
      <section className={style.h2}>
        <h2>
          Nuestros servicios de Internet por Fibra Óptica adaptados a tus
          necesidades
        </h2>
      </section>
      <section className={style.h2}>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quidem
          tempore reprehenderit debitis cumque necessitatibus. Sequi, amet
          temporibus quas quam provident omnis atque facilis fuga accusamus odio
          dolor dolorum fugiat.
        </h4>
      </section>
      <section className={style.downBox}>
        {boxes.map(({ id, info, buton, styless }) => (
          <ArticleAnimate id={id}>
            <div className={styless || style.boxes}>
              <h3>{info}</h3>
              {buton}
            </div>
          </ArticleAnimate>
        ))}
      </section>
    </div>
  );
}
