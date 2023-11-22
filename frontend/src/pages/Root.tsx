import { Outlet } from "react-router-dom";
import { Header } from "../layouts/Header";
import { Footer } from "../layouts/Footer";
import { Wrap } from "../layouts/Wrap";
import { Background } from "../components/Background";

export const Root = () => {
  return (
    <>
      <Background />
      <Header />
      <Wrap>
        <Outlet />
      </Wrap>
      <Footer />
    </>
  );
};
