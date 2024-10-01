import { useState } from "react";

import { useDispatch } from "react-redux";

import { coinCapApi } from "../../../shared/api";
import { AssetData } from "../../../shared/api/types";

export const useCoinShopHandles = ({
  asset,
  onClose,
}: {
  asset: AssetData | undefined;
  onClose: () => void;
}) => {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const numValue = parseFloat(amount);

    if (Number.isNaN(numValue)) {
      setError("The value must be a number");
    } else if (numValue < 0) {
      setError("Number cannot be less than zero");
    } else if (numValue > +(asset?.supply as string)) {
      setError("Available supply for trading has been exceeded");
    } else {
      setError(null);
      const existingData = localStorage.getItem("portfolio");
      const portfolio = existingData ? JSON.parse(existingData) : {};

      const coinId = asset?.id;

      if (coinId) {
        if (!portfolio[coinId]) {
          portfolio[coinId] = [];
        }

        portfolio[coinId].push({ num: numValue, price: asset?.priceUsd });

        localStorage.setItem("portfolio", JSON.stringify(portfolio));
        dispatch(coinCapApi.util.invalidateTags(["Assets"]));
      }
      setAmount("");
      onClose();
    }
  };

  return { handleChange, handleSubmit, amount, error };
};
