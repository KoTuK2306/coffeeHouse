import { FC } from "react";
import { Header } from "./components/Header";
import { Preview } from "./components/Preview";
import { Menu } from "./components/Menu";
import { Reasons } from "./components/Reasons";
import { Footer } from "./components/Footer";
import classes from "./App.module.css";

export const App: FC = () => {
  return (
    <div className={classes.app}>
      <Header />
      <Preview />
      <Menu />
      <Reasons />
      <Footer />
    </div>
  );
};
