import { fetchStoreList } from "@/api/store";
import { QueryKey } from "@/constants/query";
import { Box } from "@mui/material";

import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import StoreCard from "./src/store-card";

const StorePage: NextPage = () => {
	const { data, isSuccess } = useQuery(
		[QueryKey.FETCH_STORE_LIST],
		fetchStoreList
	);

	if (!data) return <div>Loading...</div>;

	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: 2, py: 2 }}>
			{data?.map((store) => {
				return <StoreCard store={store} key={store.id} />;
			})}
		</Box>
	);
};

export default StorePage;
