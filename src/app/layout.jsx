import localFont from "next/font/local";
import "./globals.css";



export const metadata = {
  title: "E-Commerce Nextjs",
  description:'Home Page',
  icons:{
    icon:'./images/bag-shopping-solid.svg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
