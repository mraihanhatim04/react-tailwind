import React from "react";
import { Modal, ModalContent, Button, useDisclosure } from "@nextui-org/react";
import CartPage from "../../pages/cart";

const CartModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const sizes = ["3xl"];

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <Button key={size} onPress={() => handleOpen(size)}>
            My Cart
          </Button>
        ))}
      </div>
      <Modal size={size} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <CartPage />
        </ModalContent>
      </Modal>
    </>
  );
};
export default CartModal;
