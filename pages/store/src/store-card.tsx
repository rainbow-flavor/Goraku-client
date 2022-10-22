import { Store } from "@/types/store";
import { Box, Card, CardMedia, Chip, Typography } from "@mui/material";
import { faker } from "@faker-js/faker";
import { useRouter } from "next/router";

interface Props {
	store: Store;
}

const StoreCard = ({ store }: Props) => {
	const {} = useRouter();

	const networkList = Object.entries(store.networkType)
		.map((network) => {
			const networkType = network[0];
			const isNetwork = network[1];
			if (isNetwork) return networkType;
		})
		.filter((data) => data !== undefined);

	return (
		<Card
			sx={{
				display: "flex",
				flexDirection: "column",
				flexGrow: 1,
				borderRadius: 4,
			}}
		>
			<CardMedia
				component='img'
				sx={{ flexGrow: 1, height: 200 }}
				src={faker.image.business()}
				alt=''
			/>

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					py: 0.5,
					px: 1,
					gap: 1,
					flexGrow: 1,
					height: "100px",
				}}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 1,
					}}
				>
					<Typography
						component='h4'
						fontSize={16}
						noWrap
						fontWeight='bold'
						sx={{ maxWidth: "230px" }}
					>
						{store?.name}
					</Typography>
					<Chip label='영업 중' color='success' size='small' />
				</Box>

				<Typography component='p' fontSize={14}>
					{store?.address}
				</Typography>

				<Typography component='p' fontSize={14}>
					{store?.uptime}
				</Typography>

				<Typography
					component='p'
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 1,
						justifySelf: "flex-end",
					}}
				>
					{networkList.map((network) => (
						<Chip
							key={network}
							color='error'
							variant='outlined'
							size='small'
							label={network}
						/>
					))}
				</Typography>
			</Box>
		</Card>
	);
};

export default StoreCard;
