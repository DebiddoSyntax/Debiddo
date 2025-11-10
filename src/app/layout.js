import "./globals.css";
import favicon from './favicon.ico'
import Footer from "@/ui/reusable/Footer";
import Navbar from "@/ui/reusable/Navbar";
import { DarkModeProvider } from "@/functions/DarkModeContext";
import ScrollToTop from "@/ui/reusable/ScrollToTop";



export const metadata = {
	title: "David Michael",
	description: "David Michael's portfolio website",
	icons: {
		icon: `${favicon}`, 
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<DarkModeProvider>
					<Navbar />
						<ScrollToTop />
						{children}
					<Footer />
				</DarkModeProvider>
			</body>
		</html>
	);
}
