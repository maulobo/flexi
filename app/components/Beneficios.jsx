import DivAnimate from "./animated/DivAnimate";
import SectionAnimate from "./animated/SectionAnimate";
import style from "./beneficios.module.css";

const beneficio = [
  { id: 11, info: "hola que hace" },
  { id: 12, info: "hola que hace" },
  { id: 13, info: "hola que hace" },
];

export default function Beneficios() {
  return (
    <div className={style.container} id="beneficios">
      <SectionAnimate />
      {beneficio.map(({ id, info }) => (
        <section key={id} className={style.boxContent}>
          <DivAnimate>{info}</DivAnimate>
        </section>
      ))}
    </div>
  );
}
