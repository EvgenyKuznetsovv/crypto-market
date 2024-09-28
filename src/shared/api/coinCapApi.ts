import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  Asset,
  AssetHistory,
  Assets,
  GetAssetHistoryParams,
  GetAssetsParams,
} from "./types";

export const coinCapApi = createApi({
  reducerPath: "coinCapApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.coincap.io/v2/" }),
  endpoints: (builder) => ({
    getAssets: builder.query<Assets, GetAssetsParams>({
      query: ({ limit, offset, search, ids }) => {
        const params = new URLSearchParams();

        if (limit) {
          params.append("limit", limit.toString());
        }
        if (offset) {
          params.append("offset", offset.toString());
        }
        if (search) {
          params.append("search", search);
        }
        if (ids) {
          params.append("ids", ids);
        }

        return {
          url: "assets",
          params,
        };
      },
    }),

    getAssetById: builder.query<Asset, string>({
      query: (id) => `assets/${id}`,
    }),

    getAssetHistory: builder.query<AssetHistory, GetAssetHistoryParams>({
      query: ({ id, interval, start, end }) => {
        const params = new URLSearchParams();

        if (interval) {
          params.append("interval", interval);
        }
        if (start) {
          params.append("start", start.toString());
        }
        if (end) {
          params.append("end", end.toString());
        }

        return {
          url: `assets/${id}/history`,
          params,
        };
      },
    }),
  }),
});

export const { useGetAssetsQuery, useGetAssetByIdQuery, useGetAssetHistoryQuery } =
  coinCapApi;
