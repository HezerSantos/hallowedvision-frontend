import { api } from "./apiService";

const home = api.injectEndpoints({
  endpoints: (builder) => ({
    getHomeAssets: builder.query<{ url: string }, void>({
      query: () => ({
        url: "/home",
      }),
    }),
  }),
});

export const { useGetHomeAssetsQuery } = home;
