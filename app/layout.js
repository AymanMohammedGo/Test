import { Cairo } from "next/font/google";
import ClientProvider from "./ClientProvider";
import "./globals.css";

const cairo = Cairo({ subsets: ["latin"] });

export const metadata = {
  title: "Test",
  description: "Opinion poll",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" className="bg-[#f5f5f5] " dir="rtl">
      <body className={cairo.className}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
