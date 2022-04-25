import { FC } from "react";
import { Coffee } from "../../../interfaces/Coffee";
import classes from "./CoffeeCard.module.css";

type CoffeeProps = Omit<Coffee, "id">;

export const CoffeeCard: FC<CoffeeProps> = ({ name, price, image }) => {
  return (
    <div className={classes.card}>
      <div className={classes.imageWrapper}>
        <img className={classes.image} src={image} alt={name} />
      </div>
      <p className={classes.name}>{name}</p>
      <p className={classes.price}>{`От ${price} ₽`}</p>
    </div>
  );
};
