import { ScrollAreaAutosize } from "@mantine/core";

import { useGetAssetByIdQuery } from "../../../shared/api";
import { formatPrice } from "../../../shared/lib";
import { CustomButton, CustomModal } from "../../../shared/ui";
import { useCoinShopHandles } from "../lib";

import s from "./CoinShopModal.module.css";
import { CoinShopModalProps } from "./types";

export const CoinShopModal = ({ coinId, onClose, opened }: CoinShopModalProps) => {
  const {
    data: { data: asset } = {},
    isLoading,
    isFetching,
  } = useGetAssetByIdQuery(coinId, { skip: !opened, pollingInterval: 30000 });

  const { amount, error, handleChange, handleSubmit } = useCoinShopHandles({
    asset,
    onClose,
  });

  const totalSum = +amount * +(asset?.priceUsd as string);
  let title = "Loading";

  if (!(isLoading || isFetching) && asset?.name) {
    title = asset.name;
  }

  return (
    <CustomModal
      onClose={onClose}
      opened={opened}
      scrollAreaComponent={ScrollAreaAutosize}
      size={"350px"}
      title={title}>
      <form className={s.container} id={"coinShopForm"} onSubmit={handleSubmit}>
        {error && (
          <p className={s.error} id={"coinShopFormError"}>
            {error}
          </p>
        )}
        <div>
          <input
            className={s.numberInput}
            id={"amount"}
            onChange={handleChange}
            placeholder={"Input number of coins"}
            type={"number"}
            value={amount}
          />
        </div>

        <p>
          <strong>Total sum: </strong>
          {formatPrice(totalSum.toString())} $
        </p>

        <CustomButton label={"Buy"} type={"submit"} />
      </form>
    </CustomModal>
  );
};
