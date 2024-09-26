import { Modal } from "@mantine/core";
import clsx from "clsx";

import s from "./CustomModal.module.css";
import { CustomModalProps } from "./types";

export const CustomModal = ({
  children,
  className,
  title,
  ...restProps
}: CustomModalProps) => {
  return (
    <Modal.Root className={clsx(s.root, className)} {...restProps}>
      <Modal.Overlay />
      <Modal.Content className={s.modalContent}>
        <Modal.Header className={s.header}>
          <Modal.Title>{title}</Modal.Title>
          {<Modal.CloseButton className={s.closeBtn} />}
        </Modal.Header>
        <Modal.Body className={s.body}>{children}</Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};
