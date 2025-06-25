import "./globals.css";
import Header from "./components/header";
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
      <body className={raleway.className}>
        <Header />

        {children}
      </body>
    </html>
  );
}
