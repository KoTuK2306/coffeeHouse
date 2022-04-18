import { FC, useState } from "react";
import { CoffeeCard } from "./CoffeeCard";
import { coffeeImages } from "./../../coffee";
import { Coffee } from "./../../interfaces/Coffee";
import classes from "./Menu.module.css";

export const Menu: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const lastCardIndex = currentPage;
  const firstCardIndex = lastCardIndex - 1;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const pageNumbers = [];

  for (let i = 1; i <= coffeeImages.length - 2; i++) {
    pageNumbers.push(i);
  }

  const slicedCards = coffeeImages.slice(firstCardIndex, lastCardIndex + 2);

  const slideSlider = (option: string) => {
    if (option === "right") {
      setCurrentPage(currentPage + 1);
      if (currentPage === coffeeImages.length - 2) {
        setCurrentPage(1);
      }
    }
    if (option === "left") {
      setCurrentPage(currentPage - 1);
      if (currentPage === 1) {
        setCurrentPage(coffeeImages.length - 2);
      }
    }
  };

  return (
    <section id="menu" className={classes.menu}>
      <div className={classes.content}>
        <h2 className={classes.menuTitle}>меню</h2>
        <div className={classes.slider}>
          <button onClick={() => slideSlider("left")} className={classes.sliderButton}>
            <img src={`${process.env.PUBLIC_URL}/sliderChevron.svg`} alt="chevron" className={classes.chevron} />
          </button>
          <div className={classes.cardsWrapper}>
            {slicedCards.map(({ id, name, price, image }: Coffee) => (
              <CoffeeCard key={id} name={name} price={price} image={image} />
            ))}
          </div>
          <button onClick={() => slideSlider("right")} className={`${classes.sliderButton} ${classes.chevronRotated}`}>
            <img src={`${process.env.PUBLIC_URL}/sliderChevron.svg`} alt="chevron" className={classes.chevron} />
          </button>
        </div>
        <div className={classes.pagination}>
          {pageNumbers.map((number) => (
            <p
              key={number}
              className={currentPage === number ? `${classes.pageLink} ${classes.active}` : classes.pageLink}
              onClick={() => {
                paginate(number);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
