import { FC, ReactNode } from "react";
import classes from "./Container.module.css";

interface MainPaddingProps {
  className: ReactNode;
}

export const Container: FC<MainPaddingProps> = ({ className, children }) => {
  return <section className={`${className} ${classes.section}`}>{children}</section>;
};
