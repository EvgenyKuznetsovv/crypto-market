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
  } = useGetAssetByIdQuery(coinId, { skip: !opened });

  const { amount, error, handleChange, handleSubmit } = useCoinShopHandles({
    asset,
    onClose,
  });

  const totalSum = +amount * +(asset?.priceUsd as string);

  return (
    <CustomModal
      onClose={onClose}
      opened={opened}
      scrollAreaComponent={ScrollAreaAutosize}
      size={"350px"}
      title={isLoading || isFetching ? "Loading..." : asset?.name}>
      <form className={s.container} onSubmit={handleSubmit}>
        {error && <p className={s.error}>{error}</p>}
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
