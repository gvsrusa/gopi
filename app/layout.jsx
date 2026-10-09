import { Inter } from "next/font/google";
import "./globals.css";

// Fallback only: Apple devices render the system SF Pro stack first
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Gopi Chand Gorantla · NDT Technician & CS Engineer",
  description:
    "Gopi Chand Gorantla — NDT Technician & Computer Science Engineer. ASNT Level 2 certified. Radiographic testing, data analysis, software development.",
  icons: { icon: "/icon.png", apple: "/icon.png" },
  openGraph: {
    title: "Gopi Chand Gorantla · NDT Technician & CS Engineer",
    description: "ASNT Level 2 certified NDT technician with a Computer Science background.",
    images: ["/gopi.webp"],
    type: "profile",
  },
};

export const viewport = {
  themeColor: "#fafafc",
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
