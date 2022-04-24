import { FC } from "react";
import { Link } from "../../interfaces/Links";
import { MainPadding } from "../../layouts/MainPadding";
import classes from "./Footer.module.css";

const links: Link[] = [
  { id: "home", title: "Главная", href: "#" },
  { id: "aboutUs", title: "О нас", href: "#" },
  { id: "menu", title: "Меню", href: "#" },
  { id: "delivery", title: "Доставка", href: "#" },
  { id: "contacts", title: "Контакты", href: "#" },
  { id: "coffeeShops", title: "Кофейни", href: "#" },
  { id: "newItems", title: "Новинки", href: "#" },
  { id: "coffee", title: "Кофе", href: "#" },
  { id: "desserts", title: "Десерты", href: "#" },
  { id: "syrup", title: "Строп", href: "#" },
];

export const Footer: FC = () => {
  return (
    <MainPadding className={classes.footer}>
      <div className={classes.content}>
        <h1 className={classes.title}>coffee</h1>
        <div className={classes.linksWrapper}>
          {links.map(({ title, href, id }) => (
            <a key={id} href={href} className={classes.link}>
              {title}
            </a>
          ))}
        </div>
        <div className={classes.contacts}>
          <button className={classes.makeOrder}>Сделать заказ</button>
          <a href="tel:+7(123)456-67-89" className={classes.phone}>
            +7(123)456-67-89
          </a>
          <a href="mailto: katyusha.karachinskaya@yandex.ru" className={classes.mail}>
            katyusha.karachinskaya@yandex.ru
          </a>
        </div>
      </div>
    </MainPadding>
  );
};
