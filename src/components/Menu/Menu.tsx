import { FC, useState } from "react";
import { CoffeeCard } from "./CoffeeCard";
import { coffeeImages } from "../../coffee";
import { Coffee } from "../../interfaces/Coffee";
import { makePathToPublic } from "../../utils/makePathToPublic";
import classes from "./Menu.module.css";

export const Menu: FC = () => {
  const [translate, setTranslate] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pagesCount = coffeeImages.length - 2;
  const cardWidth = 335;

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    if (pageNumber === 1) {
      setTranslate(0);
      return;
    }
    setTranslate(-cardWidth * (pageNumber - 1));
  };

  const slideSlider = (option: "right" | "left") => {
    if (option === "right") {
      setCurrentPage(currentPage + 1);
      if (currentPage === pagesCount) {
        setCurrentPage(1);
        setTranslate(0);
        return;
      }
      setTranslate(translate - 335);
    }
    if (option === "left") {
      setCurrentPage(currentPage - 1);
      if (currentPage === 1) {
        setCurrentPage(pagesCount);
        setTranslate(-cardWidth * (pagesCount - 1));
        return;
      }
      setTranslate(translate + cardWidth);
    }
  };

  return (
    <section id="menu" className={classes.menu}>
      <div className={classes.content}>
        <h2 className={classes.menuTitle}>меню</h2>
        <div className={classes.slider}>
          <button onClick={() => slideSlider("left")} className={classes.sliderButton}>
            <img src={makePathToPublic("/sliderChevron.svg")} alt="chevron" className={classes.chevron} />
          </button>
          <div className={classes.viewport}>
            <div className={`${classes.cardsWrapper}`} style={{ transform: `translateX(${translate}px)` }}>
              {coffeeImages.map(({ id, name, price, image }: Coffee) => (
                <CoffeeCard key={id} name={name} price={price} image={image} />
              ))}
            </div>
          </div>
          <button onClick={() => slideSlider("right")} className={classes.sliderButton}>
            <img
              src={makePathToPublic("/sliderChevron.svg")}
              alt="chevron"
              className={`${classes.chevron} ${classes.rotated}`}
            />
          </button>
        </div>
        <div className={classes.pagination}>
          {coffeeImages.slice(0, pagesCount).map((card, index) => (
            <button
              key={index}
              className={`${classes.pageLink} ${currentPage === index + 1 ? classes.active : ""}`}
              onClick={() => {
                paginate(index + 1);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
