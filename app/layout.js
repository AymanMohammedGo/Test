import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({ subsets: ["latin"] });

export const metadata = {
  title: "Test",
  description: "Opinion poll",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
