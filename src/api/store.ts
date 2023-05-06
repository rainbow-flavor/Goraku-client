import api from "@/api/api";
import { Store } from "@/types/store";

export const fetchStoreList = async (machineName: string) => {
  const { data } = await api.get<{ code: string; data: string[] }>(
    "/machine/search",
    {
      params: {
        machineName,
      },
    }
  );

  return data;
};

export const fetchSearchList = async (params: {
  city1?: string;
  city2?: string;
  limit: number;
  isOp?: boolean;
  cardK: boolean;
  cardN: boolean;
  cardS: boolean;
  cardT: boolean;
  cardA: boolean;
}) => {
  const { data } = await api.get<{
    code: string;
    data: Store[];
  }>("/store/search", {
    params,
  });

  return data;
};
