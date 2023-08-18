/* eslint-disable react/prop-types */
import classes from "./Style.module.css";

export const Card = (props) => {
  return (
    <section
      className={`${classes.card} ${props.className ? props.className : ""}`}
    >
      {props.children}
    </section>
  );
};
