import { Outlet } from "react-router-dom";
import { Header } from "../layouts/Header";
import { Footer } from "../layouts/Footer";
import { Wrap } from "../layouts/Wrap";
import { Background } from "../components/Background";
import { Modal } from "../components/Modal";
import { useModal } from "../hooks/useModal";
import { Form } from "../components/Form";

export const Root = () => {
  const authModal = useModal();

  return (
    <>
      <Header onLogin={authModal.openModal} />
      <Wrap>
        <Outlet />
      </Wrap>
      <Footer />
      <Background />

      <Modal state={authModal}>
        <Form />
      </Modal>
    </>
  );
};
