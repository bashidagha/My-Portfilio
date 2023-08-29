import "./globals.scss";
import type { Metadata } from "next";
import "animate.css/animate.min.css";

export const metadata: Metadata = {
  title: "Farshid Karimi",
  description: "It's about Farshid Karimi resume.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
