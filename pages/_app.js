import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/globals.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>MovieTracker Carlos </title>
        <link rel="icon" href="/cine.png" />
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
