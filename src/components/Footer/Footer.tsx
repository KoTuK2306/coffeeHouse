import { FC } from "react";
import { Link } from "../../interfaces/Links";
import classes from "./Footer.module.css";

const linksChild = [
  { id: 1, title: "Главная", href: "#" },
  { id: 2, title: "О нас", href: "#" },
  { id: 3, title: "Меню", href: "#" },
  { id: 4, title: "Доставка", href: "#" },
  { id: 5, title: "Контакты", href: "#" },
  { id: 6, title: "Кофейни", href: "#" },
  { id: 7, title: "Новинки", href: "#" },
  { id: 8, title: "Кофе", href: "#" },
  { id: 9, title: "Десерты", href: "#" },
  { id: 10, title: "Строп", href: "#" },
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
          <p className={classes.phone}>8(123)456-67-89</p>
          <p className={classes.mail}>katyusha.karachinskaya@yandex.ru</p>
        </div>
      </div>
    </footer>
  );
};
