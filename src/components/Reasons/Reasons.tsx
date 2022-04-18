import { FC } from "react";
import classes from "./Reasons.module.css";
import { reasonsIcons } from "./../../reasonsIcons";

export const Reasons: FC = () => {
  return (
    <section className={classes.reasons}>
      <div className={classes.content}>
        <p className={classes.title}>любовь и польза в каждом глотке</p>
        <div className={classes.cardsWrapper}>
          {reasonsIcons.map(({ id, description, icon }) => (
            <div key={id} className={classes.card}>
              <div className={classes.iconWrapper}>
                <div className={classes.icon}>{icon}</div>
              </div>
              <p className={classes.description}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
