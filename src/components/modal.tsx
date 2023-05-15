import React from "react";
import styles from "./styles.module.css";

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return <></>;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.wrapper}>
        {/*content*/}
        <div className={styles.content}>
          {/*header*/}
          <div className={styles.header}>
            <button className={styles.buttonClose} onClick={onClose}>
              <span className={styles.iconClose}>×</span>
            </button>
          </div>
          {/*body*/}
          <div className={styles.body}>{children}</div>
          {/*footer*/}
          <div className={styles.footer}>
            <button
              className={styles.buttonCancel}
              type="button"
              onClick={onClose}
            >
              Ok
            </button>
            <button className={styles.buttonOk} type="button" onClick={onClose}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
