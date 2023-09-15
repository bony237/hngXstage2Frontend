
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";


const dmSans = DM_Sans({ subsets: ["latin"], });

export const metadata: Metadata = {
  title: "Movie discovery",
  description: "Movie discovery web application that allows users to search for movies, view details about them, and save their favorite movies",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
