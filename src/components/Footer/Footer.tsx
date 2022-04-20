import { FC } from "react";
import { Link } from "../../interfaces/Links";
import classes from "./Footer.module.css";

const linksChild = [
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
    <footer className={classes.footer}>
      <div className={classes.content}>
        <h1 className={classes.title}>coffee</h1>
        <div className={classes.linksWrapper}>
          {linksChild.map(({ title, href, id }: Link) => (
            <a key={id} href={href} className={classes.link}>
              {title}
            </a>
          ))}
        </div>
        <div className={classes.contacts}>
          <button className={classes.makeOrder}>Сделать заказ</button>
          <a href="telephone" className={classes.phone}>
            8(123)456-67-89
          </a>
          <a href="mail" className={classes.mail}>
            katyusha.karachinskaya@yandex.ru
          </a>
        </div>
      </div>
    </footer>
  );
};
