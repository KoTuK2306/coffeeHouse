import { FC } from "react";
import { CoffeeCard } from "./CoffeeCard";
import { coffeeImages } from "../../coffee";
import { Coffee } from "../../interfaces/Coffee";
import { Slider } from "../Slider";
import classes from "./Menu.module.css";

export const Menu: FC = () => {
  return (
    <section id="menu" className={classes.menu}>
      <div className={classes.content}>
        <h2 className={classes.menuTitle}>меню</h2>
        <Slider>
          {coffeeImages.map(({ id, name, price, image }: Coffee) => (
            <CoffeeCard key={id} name={name} price={price} image={image} />
          ))}
        </Slider>
      </div>
    </section>
  );
};
