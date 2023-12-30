import { useEffect, useState } from "react";

export type TModalState = {
  visible: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
};

export const useModal = (initialValue?: boolean): TModalState => {
  const [visible, setVisible] = useState(initialValue || false);

  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);
  const toggleModal = () => setVisible((visible) => !visible);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "auto";
  }, [visible]);

  return {
    visible,
    openModal,
    closeModal,
    toggleModal,
  };
};
