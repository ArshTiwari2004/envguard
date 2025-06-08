import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "envguard",
  description: "Validate and document your env variables ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Load Pacifico and Unbounded fonts from Google */}
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Unbounded&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-black">
        {children}
      </body>
    </html>
  );
}
