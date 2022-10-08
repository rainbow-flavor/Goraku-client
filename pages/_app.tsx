import Layout from "@/layout";
import { theme } from "@/styles/theme";
import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
