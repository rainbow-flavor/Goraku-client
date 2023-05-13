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
  machineName?: string;
  limit?: number;
  city1?: "서울" | "경기남부";
  city2?: string;
  isOp?: boolean;
  lat?: number;
  lng?: number;
  page?: number;
  cardK?: boolean;
  cardN?: boolean;
  cardS?: boolean;
  cardT?: boolean;
  cardA?: boolean;
}) => {
  const { data } = await api.get<
    Response<Store[]> & {
      totalPages: number;
      totalElements: number;
      currentPage: number;
    }
  >("/store/search", {
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
