import PokemonProvider from "@/contexts/PokemonContext";
import "@/styles/style.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<PokemonProvider>
				<Component {...pageProps} />
			</PokemonProvider>
		</QueryClientProvider>
	);
}
