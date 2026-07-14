import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display-src",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans-src",
  display: "swap",
});

export const metadata = {
  title: "Gopi Chand Gorantla · NDT Technician & CS Engineer",
  description:
    "Gopi Chand Gorantla — NDT Technician & Computer Science Engineer. ASNT Level 2 certified. Radiographic testing, data analysis, software development.",
  icons: { icon: "/gopi.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
