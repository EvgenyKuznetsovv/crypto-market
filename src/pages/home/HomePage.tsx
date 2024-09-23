import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const HomePage = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
      <>
        <h1 className={"text-3xl font-bold underline"}>Hello world!</h1>
  
        <Modal onClose={close} opened={opened} title={"Authentication"}>
          <h1>Модалка</h1>
        </Modal>
  
        <Button onClick={open}>Open modal</Button>
      </>
    );
}

export default HomePage;