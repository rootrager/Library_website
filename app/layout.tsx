import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google"; // <--- Orbitron رو اضافه کن
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// تعریف فونت فضایی
const orbitron = Orbitron({ 
  subsets: ["latin"], 
  variable: "--font-orbitron",
  weight: ["400", "700", "900"] // وزن‌های مختلف
});

export const metadata: Metadata = {
  title: "Neural Shelf | AI Library",
  description: "Curated collection of AI books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* اضافه کردن متغیر فونت به body */}
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

