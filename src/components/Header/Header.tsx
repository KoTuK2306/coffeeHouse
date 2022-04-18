import { FC } from "react";
import classes from "./Header.module.css";
import { Link } from "./../../interfaces/Links";

const headerLinks = [
  { id: 1, href: "#", title: "Главная" },
  { id: 2, href: "#", title: "О нас" },
  { id: 3, href: "#", title: "Заказать" },
  { id: 4, href: "#", title: "Отзывы" },
  { id: 5, href: "#", title: "Продукция" },
];

export const Header: FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerContent}>
        <h1 className={classes.title}>coffee</h1>
        <div className={classes.buttonsWrapper}>
          {headerLinks.map(({ id, href, title }: Link) => (
            <a key={id} className={classes.link} href={href}>
              {title}
            </a>
          ))}
          <button className={classes.cart}>
            <img className={classes.cartIcon} src={`${process.env.PUBLIC_URL}/cart.svg`} alt="cart" />
          </button>
        </div>
      </div>
    </header>
  );
};
