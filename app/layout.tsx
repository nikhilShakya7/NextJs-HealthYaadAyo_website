import "./globals.css";

import Header from "./components/header";
import Footer from "./components/footer";
<link
  href="https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=swap"
  rel="stylesheet"
/>;
<link
  href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"
  rel="stylesheet"
/>;
import { Lato } from "next/font/google";

import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
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
      <body className={raleway.className}>
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
}
