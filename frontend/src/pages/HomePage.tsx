import { DownloadIcon, KeyBoldIcon, UserBoldIcon } from "../assets/icons";
import { ActionButton } from "../components/ActionButton";
import { Modal } from "../components/Modal";
import { Title } from "../components/Title";
import { Card } from "../layouts/Card";
import { Field } from "../components/Field";
import { Form } from "../components/Form";
import { useModal } from "../hooks/useModal";

export const HomePage = () => {
  const registerModal = useModal();

  return (
    <>
      <div
        style={{
          height: 300,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 48,
        }}
      >
        <h2 style={{ fontSize: 40, width: 640, margin: 0, marginBottom: 16 }}>
          Самый лучший файлообменник по мнению моих друзей
        </h2>
        <p style={{ margin: 0, marginBottom: 32, color: "#c7c7c7" }}>
          А каким файлообменником ты пользуешься?
        </p>
        <ActionButton
          backgroundColor="#9381ff"
          label="Присоединиться"
          icon={<DownloadIcon />}
          onClick={registerModal.openModal}
        />
      </div>
      <Card>
        <Title />
      </Card>

      <Modal state={registerModal}>
        <Form title="Регистрация">
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
