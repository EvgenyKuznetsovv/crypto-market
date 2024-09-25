import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

// import { useGetAssetByIdQuery, useGetAssetHistoryQuery, useGetAssetsQuery } from "../../shared/api";

const HomePage = () => {
  const [opened, { open, close }] = useDisclosure(false);
  // const {
  //   data: assets,
  //   error: assetsError,
  //   isLoading: assetsLoading,
  // } = useGetAssetsQuery({}, {pollingInterval: 30000});

  // const {
  //   data: history,
  //   error: historyError,
  //   isLoading: historyLoading,
  // } = useGetAssetHistoryQuery({
  //   id: "bitcoin",
  //   interval: "d1"
  // });

  // const { data: asset, error: assetError, isLoading: assetLoading } = useGetAssetByIdQuery('bitcoin');

  // console.log("histoey:", assets);
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
