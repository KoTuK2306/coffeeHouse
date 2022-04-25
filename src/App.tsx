import { FC } from "react";
import { MainLayout } from "./layouts/MainLayout";
import { Preview } from "./components/Preview";
import { Menu } from "./components/Menu";
import { Reasons } from "./components/Reasons";
import classes from "./App.module.css";

export const App: FC = () => {
  return (
    <div className={classes.app}>
      <MainLayout>
        <Preview />
        <Menu />
        <Reasons />
      </MainLayout>
    </div>
  );
};
