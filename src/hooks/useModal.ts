import React from "react";

type CustomStyles = {
  content: React.CSSProperties;
};

type ModalHookReturnType = {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: () => void;
  closeModal: () => void;
  afterOpenModal: () => void;
  customStyles: CustomStyles;
};

export default function useModal(): ModalHookReturnType {
  const [modalIsOpen, setIsOpen] = React.useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const afterOpenModal = () => {
    console.log("After!");
  };

  const customStyles: CustomStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return {
    modalIsOpen,
    setIsOpen,
    openModal,
    closeModal,
    afterOpenModal,
    customStyles,
  };
}
