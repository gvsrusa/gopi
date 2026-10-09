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
  // Absolute base so og:image resolves to a URL crawlers (WhatsApp etc.) can fetch
  metadataBase: new URL("https://gopi.gorantla.dev"),
  alternates: { canonical: "/" },
  title: "Gopi Chand Gorantla · NDT Technician & CS Engineer",
  description:
    "Gopi Chand Gorantla — NDT Technician & Computer Science Engineer. ASNT Level 2 certified. Radiographic testing, data analysis, software development.",
  icons: { icon: "/icon.png", apple: "/icon.png" },
  openGraph: {
    title: "Gopi Chand Gorantla · NDT Technician & CS Engineer",
    description: "ASNT Level 2 certified NDT technician with a Computer Science background.",
    // JPEG 1200x630: WhatsApp/LinkedIn previews are unreliable with WebP
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Gopi Chand Gorantla" }],
    type: "profile",
  },
  twitter: { card: "summary_large_image", images: ["/og.jpg"] },
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
