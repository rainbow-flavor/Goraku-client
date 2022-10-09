import api from "@/lib/api";
import { Store } from "@/types/store";

export const fetchStoreList = async (): Promise<Store[]> => {
	const { data } = await api.get<Store[]>("/store?condition=or");

	return data;
};
