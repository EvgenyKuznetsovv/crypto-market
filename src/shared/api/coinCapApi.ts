import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coinCapApi = createApi({
  reducerPath: "coinCapApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.coincap.io/v2/" }),
  endpoints: (builder) => ({
    getAssets: builder.query({
      query: ({ limit, offset, search }) => {
        const params = new URLSearchParams();

        if (limit) {
          params.append("limit", limit);
        }
        if (offset) {
          params.append("offset", offset);
        }
        if (search) {
          params.append("search", search);
        }

        return {
          url: "assets",
          params,
        };
      },
    }),

    getAssetById: builder.query({
      query: (id) => `assets/${id}`,
    }),

    getAssetHistory: builder.query({
      query: ({ id, interval, start, end }) => {
        const params = new URLSearchParams();

        if (interval) {
          params.append("interval", interval);
        }
        if (start) {
          params.append("start", start);
        }
        if (end) {
          params.append("end", end);
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
