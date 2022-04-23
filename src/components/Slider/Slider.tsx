import { FC, useState, Children } from "react";
import { makePathToPublic } from "../../utils/makePathToPublic";
import classes from "./Slider.module.css";

const CARD_WIDTH = 335;
type OptionType = "left" | "right";

export const Slider: FC = ({ children }) => {
  const [translate, setTranslate] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pagesCount = Children.count(children) - 2;

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    if (pageNumber === 1) {
      setTranslate(0);
      return;
    }
    setTranslate(-CARD_WIDTH * (pageNumber - 1));
  };

  const shiftSlider = (option: OptionType) => {
    if (option === "right") {
      setCurrentPage(currentPage + 1);
      if (currentPage === pagesCount) {
        setCurrentPage(1);
        setTranslate(0);
        return;
      }
      setTranslate(translate - CARD_WIDTH);
    }
    if (option === "left") {
      setCurrentPage(currentPage - 1);
      if (currentPage === 1) {
        setCurrentPage(pagesCount);
        setTranslate(-CARD_WIDTH * (pagesCount - 1));
        return;
      }
      setTranslate(translate + CARD_WIDTH);
    }
  };
  return (
    <>
      <div className={classes.slider}>
        <button onClick={() => shiftSlider("left")} className={classes.sliderButton}>
          <img src={makePathToPublic("/chevron.svg")} alt="chevron" className={classes.chevron} />
        </button>
        <div className={classes.viewport}>
          <div className={`${classes.cardsWrapper}`} style={{ transform: `translateX(${translate}px)` }}>
            {children}
          </div>
        </div>
        <button onClick={() => shiftSlider("right")} className={classes.sliderButton}>
          <img
            src={makePathToPublic("/chevron.svg")}
            alt="chevron"
            className={`${classes.chevron} ${classes.rotated180}`}
          />
        </button>
      </div>
      <div className={classes.pagination}>
        {Children.toArray(children)
          .slice(0, pagesCount)
          .map((_, index) => (
            <button
              key={index}
              className={`${classes.pageLink} ${currentPage === index + 1 ? classes.active : ""}`}
              onClick={() => {
                paginate(index + 1);
              }}
            />
          ))}
      </div>
    </>
  );
};
