import { Inter, Press_Start_2P } from "next/font/google"; 
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// 👇 تغییر ۲: تنظیمات فونت پیکسلی
const pressStart = Press_Start_2P({
  weight: "400", // این فونت فقط وزن 400 داره
  subsets: ["latin"],
  variable: "--font-press-start", // اسم متغیرش رو می‌ذاریم press-start
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
      {/* 👇 تغییر ۳: اضافه کردن متغیر به className */}
      <body className={`${inter.variable} ${pressStart.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

