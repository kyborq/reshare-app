import { Outlet } from "react-router-dom";
import { Header } from "../layouts/Header";
import { Footer } from "../layouts/Footer";
import { Wrap } from "../layouts/Wrap";
import { Background } from "../components/Background";
import { Modal } from "../components/Modal";
import { useModal } from "../hooks/useModal";
import { LoginForm } from "../forms/LoginForm";
import { useAtom } from "jotai";
import { userAtom } from "../store/userAtom";
import { useQuery } from "react-query";
import { getCurrentUser } from "../api/services/userService";

export const Root = () => {
  const { refetch } = useQuery({
    queryFn: getCurrentUser,
    onSuccess: (user) => {
      authModal.closeModal();
      setUser({ user });
    },
  });

  const [user, setUser] = useAtom(userAtom);
  const authModal = useModal();

  return (
    <>
      <Header onLogin={authModal.openModal} user={user.user} />
      <Wrap>
        <Outlet />
      </Wrap>
      <Footer />
      <Background />

      <Modal state={authModal}>
        <LoginForm onSuccess={refetch} />
      </Modal>
    </>
  );
};
