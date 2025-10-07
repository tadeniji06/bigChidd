import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import ClarityScript from "@/components/Clarity";
import Adsense from "@/components/Adsense";

export const metadata: Metadata = {
	title: "BigChidd Tips",
	description: "BigChidd Tips",
	icons: {
		icon: "/favicon1.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<meta
				name='google-adsense-account'
				content='ca-pub-6862633558772585'
			/>
			<body className={`antialiased`}>
				<Header />
				{children}
				<Footer />
				<Adsense />
				<ClarityScript />
			</body>
		</html>
	);
}
