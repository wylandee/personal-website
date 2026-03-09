import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/scrollprogress";

const dmSerif = DM_Serif_Display({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <ScrollProgress />
        {children}

      </body>
    </html>
  );
}