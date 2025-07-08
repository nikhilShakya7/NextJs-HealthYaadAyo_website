import "./globals.css";

import Header from "./components/header";
import Footer from "./components/footer";
<link
  href="https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=swap"
  rel="stylesheet"
/>;

import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Health Yaad Ayo",
  description: "Health Assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={raleway.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
