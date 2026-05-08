import { Poppins, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-baskerville",
});

export const metadata = {
  title: "Ceylon Wellness Care",
  description: "Sri Lanka's most trusted wellness directory, connecting you to the best wellness experiences across the island.",
   icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    // Combine both variables here
    <html lang="en" className={`${poppins.variable} ${baskerville.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}