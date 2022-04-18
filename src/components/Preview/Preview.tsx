import { FC } from "react";
import { weekOffers } from "./../../weekOffers";
import { Link } from "react-scroll";
import classes from "./Preview.module.css";

export const Preview: FC = () => {
  return (
    <section className={classes.preview}>
      <div className={classes.textWithImage}>
        <div className={classes.textWrapper}>
          <p className={classes.bigText}>горячий кофе -</p>
          <p className={classes.smallText}>всегда самый вкусный</p>
          <button className={classes.button}>Заказать</button>
        </div>
        <img className={classes.coffeeBeans} src={`${process.env.PUBLIC_URL}/coffeeBeans.png`} alt="cofeeBeans" />
      </div>
      <div className={classes.chevronWrapper}>
        <Link to="menu" smooth={true} offset={-60} duration={1000}>
          <img className={classes.chevron} src={`${process.env.PUBLIC_URL}/chevron.svg`} alt="chevron" />
        </Link>
      </div>
      <div className={classes.weekOffers}>
        <h2 className={classes.offerTitle}>предложения недели</h2>
        <div className={classes.imagesWrapper}>
          {weekOffers.map(({ id, icon }) => (
            <img className={classes.offferImage} key={id} src={icon} alt={`weekOffer${id}`} />
          ))}
        </div>
      </div>
    </section>
  );
};
