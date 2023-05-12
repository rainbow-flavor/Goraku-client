import api from "@/api/api";
import { Response } from "@/types/api";
import { Store } from "@/types/store";

export const fetchStoreList = async (machineName: string) => {
  const { data } = await api.get<Response<string[]>>("/machine/search", {
    params: {
      machineName,
    },
  });

  return data;
};

export const fetchSearchList = async (params: {
  limit: number;
  city1?: string;
  city2?: string;
  isOp?: boolean;
  cardK: boolean;
  cardN: boolean;
  cardS: boolean;
  cardT: boolean;
  cardA: boolean;
  machineName: string;
}) => {
  const { data } = await api.get<Response<Store[]>>("/store/search", {
    params,
  });

  return data;
};

export const fetchStoreDetail = async (storeId: string) => {
  const { data } = await api.get<Response<Store>>("/store/detail", {
    params: {
      storeId,
    },
  });

  return data.data;
};
