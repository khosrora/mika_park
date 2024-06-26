import { estedad } from "./../utils/local_font";
import IndexLayout from "./components/layouts/IndexLayout";
import "./globals.css";


export const metadata = {
  title: "میکا پارک | صفحه اصلی",
  description: "Generated by create next app",
  // manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${estedad.variable} font-sans`}>
        <IndexLayout>
          {children}
        </IndexLayout>
      </body>
    </html>
  );
}
