import { FC } from "react";
import { Link } from "../../interfaces/Links";
import { makePathToPublic } from "../../utils/makePathToPublic";
import { Container } from "../../layouts/Container";
import classes from "./Header.module.css";

const headerLinks: Link[] = [
  { id: "home", href: "#", title: "Главная" },
  { id: "aboutUs", href: "#", title: "О нас" },
  { id: "toOrder", href: "#", title: "Заказать" },
  { id: "reviews", href: "#", title: "Отзывы" },
  { id: "products", href: "#", title: "Продукция" },
];

export const Header: FC = () => {
  return (
    <header>
      <Container className={classes.header}>
        <h1 className={classes.title}>coffee</h1>
        <div className={classes.linksWrapper}>
          {headerLinks.map(({ id, href, title }) => (
            <a key={id} className={classes.link} href={href}>
              {title}
            </a>
          ))}
          <button className={classes.cart}>
            <img className={classes.cartIcon} src={makePathToPublic("/cart.svg")} alt="cart" />
          </button>
        </div>
      </Container>
    </header>
  );
};
