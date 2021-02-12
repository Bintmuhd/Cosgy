import Head from 'next/head';
import CardPage from '../components/CardPage';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Cogsy UI Test</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<CardPage />
			</main>
		</div>
	);
}
