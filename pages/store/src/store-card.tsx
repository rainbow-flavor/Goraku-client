import { Store } from "@/types/store";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import { faker } from "@faker-js/faker";

interface Props {
	store: Store;
}

const StoreCard = ({ store }: Props) => {
	return (
		<Card sx={{ display: "flex", flexGrow: 1, borderRadius: 4 }}>
			<CardMedia
				component='img'
				sx={{ width: 151, height: 150 }}
				src={faker.image.business()}
				alt=''
			/>

			<Box
				sx={{ display: "flex", flexDirection: "column", py: 2, flexGrow: 1 }}
			>
				<Typography component='h5'>{store?.name}</Typography>
			</Box>
		</Card>
	);
};

export default StoreCard;
