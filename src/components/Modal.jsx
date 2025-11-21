import React from "react";
import classes from "./Modal.module.css";

const Modal = ({ children, hideModalHandler }) => {
  return (
    <>
      <div className={classes.backdrop} onClick={hideModalHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
