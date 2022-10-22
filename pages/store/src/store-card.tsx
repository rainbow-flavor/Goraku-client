import { Store } from "@/types/store";
import {
	Avatar,
	Box,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Chip,
	Divider,
	Typography,
} from "@mui/material";
import { faker } from "@faker-js/faker";
import { useRouter } from "next/router";

const styles = {
	cardcontent: {
		padding: 0,
		"&:last-child": {
			paddingBottom: 0,
		},
	},
};
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
		<Box sx={{ border: "1px solid #d9d9d9" }}>
			<Card
				variant='outlined'
				sx={{
					border: "none",
					padding: "16px",

					height: "182px",
				}}
			>
				<CardContent
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "4px",
						padding: 0,
						"&:last-child": { pb: 0 },
					}}
				>
					<Typography
						sx={{ fontSize: 14, display: "flex", gap: 1 }}
						color='text.secondary'
						component='div'
					>
						{networkList.map((network) => (
							<Chip
								key={network}
								avatar={
									<Avatar alt='Natacha' src='/static/images/avatar/1.jpg' />
								}
								variant='outlined'
								color='primary'
								size='small'
								label={network}
							/>
						))}
					</Typography>

					<Box
						sx={{
							display: "flex",
							gap: 1,
							alignItems: "center",

							mb: 1,
						}}
					>
						<Typography
							variant='h5'
							noWrap
							sx={{ maxWidth: "80%", fontWeight: 700 }}
						>
							{store.name}
						</Typography>
						{store.isop && (
							<Chip
								size='small'
								variant='filled'
								color='success'
								label='영업중'
							/>
						)}
					</Box>

					<Typography variant='subtitle2'>{store.address}</Typography>

					{store.contact && (
						<Box
							sx={{
								display: "flex",
								alignItems: "flex-start",
								width: "fit-content",
								borderRadius: 1,
								bgcolor: "background.paper",
								color: "text.secondary",
								"& svg": {
									m: 1.5,
								},
								"& hr": {
									mx: 0.5,
								},
							}}
						>
							<Typography variant='subtitle2' noWrap sx={{ minWidth: "50px" }}>
								연락처
							</Typography>
							<Divider orientation='vertical' variant='middle' flexItem />
							<Typography variant='subtitle2'>{store.contact}</Typography>
						</Box>
					)}

					{store.uptime && (
						<Box
							sx={{
								display: "flex",
								alignItems: "flex-start",
								width: "fit-content",
								// border: (theme) => `1px solid ${theme.palette.divider}`,
								borderRadius: 1,
								bgcolor: "background.paper",
								color: "text.secondary",
								"& svg": {
									m: 1.5,
								},
								"& hr": {
									mx: 0.5,
								},
							}}
						>
							<Typography variant='subtitle2' noWrap sx={{ minWidth: "50px" }}>
								영업시간
							</Typography>
							<Divider orientation='vertical' variant='middle' flexItem />
							<Typography variant='subtitle2'>{store.uptime}</Typography>
						</Box>
					)}
				</CardContent>
			</Card>
		</Box>
	);
};

export default StoreCard;
