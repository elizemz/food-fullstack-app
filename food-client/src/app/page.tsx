import { Grid, Button, Typography } from "@mui/material";

export default function Home() {
	return (
		<main>
			<Grid container>
				<Grid item xs={12} md={6}>
					<Typography variant="h1">Welcome MUI Framework</Typography>
				</Grid>
				<Grid item xs={12} md={6}>
					<Button variant="contained" color="primary">
						Click
					</Button>
				</Grid>
			</Grid>
		</main>
	);
}
