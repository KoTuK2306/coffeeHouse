import { FC } from "react";
import { Container } from "../../layouts/Container";
import { reasonsIcons } from "../../reasonsIcons";
import classes from "./Reasons.module.css";

export const Reasons: FC = () => {
  return (
    <section>
      <Container className={classes.reasons}>
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
      </Container>
    </section>
  );
};
