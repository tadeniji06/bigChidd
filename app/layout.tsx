import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

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
			<body className={`antialiased`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
