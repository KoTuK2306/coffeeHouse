import { FC } from "react";
import { Link } from "react-scroll";
import { weekOffers } from "../../weekOffers";
import { makePathToPublic } from "../../utils/makePathToPublic";
import { MainPadding } from "../../layouts/MainPadding";
import classes from "./Preview.module.css";

export const Preview: FC = () => {
  return (
    <MainPadding className={classes.preview}>
      <div className={classes.textWithImage}>
        <div className={classes.textWrapper}>
          <p className={classes.title}>горячий кофе -</p>
          <p className={classes.subTitle}>всегда самый вкусный</p>
          <button className={classes.button}>Заказать</button>
        </div>
      </div>
      <div className={classes.chevronWrapper}>
        <Link to="menu" smooth={true} offset={-60} duration={1000}>
          <img className={classes.chevron} src={makePathToPublic("/bigChevron.svg")} alt="chevron" />
        </Link>
      </div>
      <div className={classes.weekOffers}>
        <h2 className={classes.offerTitle}>предложения недели</h2>
        <div className={classes.imagesWrapper}>
          {weekOffers.map(({ id, icon }) => (
            <img className={classes.offerImage} key={id} src={icon} alt={id} />
          ))}
        </div>
      </div>
    </MainPadding>
  );
};
