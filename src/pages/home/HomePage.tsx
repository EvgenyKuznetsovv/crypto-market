import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { useGetAssetByIdQuery } from "../../shared/api";

const HomePage = () => {
  const [opened, { open, close }] = useDisclosure(false);
  // const {
  //   data: {data: assets = []} = {},
  //   error: assetsError,
  //   isLoading: assetsLoading,
  // } = useGetAssetsQuery({}, {pollingInterval: 30000});

  // const {
  //   data: { data: history = [] } = {},
  //   error: historyError,
  //   isLoading: historyLoading,
  // } = useGetAssetHistoryQuery({
  //   id: "bitcoin",
  //   interval: "d1",
  // });

  // const {
  //   data: { data: asset } = {},
  //   error: assetError,
  //   isLoading: assetLoading,
  // } = useGetAssetByIdQuery("bitcoin");

  // console.log("histoey:", history);
  // console.log("asset:", asset);

  return (
    <>
      <h1 className={"text-3xl font-bold underline"}>Hello world!</h1>

      <Modal onClose={close} opened={opened} title={"Authentication"}>
        <h1>Модалка</h1>
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
};

export default HomePage;
