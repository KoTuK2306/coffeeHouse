import { FC } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
