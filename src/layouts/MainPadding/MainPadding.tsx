import { FC, ReactNode } from "react";
import classes from "./MainPadding.module.css";

interface MainPaddingProps {
  className: ReactNode;
}

export const MainPadding: FC<MainPaddingProps> = ({ className, children }) => {
  return <section className={`${className} ${classes.section}`}>{children}</section>;
};
