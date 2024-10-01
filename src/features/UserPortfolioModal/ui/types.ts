import {
  BaseQueryFn,
  FetchBaseQueryError,
  QueryActionCreatorResult,
  QueryDefinition,
} from "@reduxjs/toolkit/query";

import { AssetData, Assets, GetAssetsParams } from "../../../shared/api/types";

export interface UserPortfolioModalProps {
  apiData: AssetData[];
  onClose: () => void;
  opened: boolean;
  refetchPortfolioAssets: () => QueryActionCreatorResult<
    QueryDefinition<
      GetAssetsParams,
      BaseQueryFn<string | void, Assets, FetchBaseQueryError>,
      string,
      Assets,
      "coinCapApi"
    >
  >;
}
