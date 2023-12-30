import { Outlet } from "react-router-dom";
import { Header } from "../layouts/Header";
import { Footer } from "../layouts/Footer";
import { Wrap } from "../layouts/Wrap";
import { Background } from "../components/Background";
import { Modal } from "../components/Modal";
import { useModal } from "../hooks/useModal";
import { Form } from "../components/Form";
import { Field } from "../components/Field";
import { KeyBoldIcon, UserBoldIcon } from "../assets/icons";
import { ActionButton } from "../components/ActionButton";

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
        <Form title="Добро пожаловать">
          <Form.Content>
            <Field
              icon={<UserBoldIcon fill="#adb5bd" />}
              label="Электронная почта:"
              placeholder="example@mail.com"
            />
            <Field
              icon={<KeyBoldIcon fill="#adb5bd" />}
              label="Пароль:"
              placeholder="Password"
            />
          </Form.Content>
          <ActionButton icon={<KeyBoldIcon fill="#ffffff" />} label="Войти" />
        </Form>
      </Modal>
    </>
  );
};
