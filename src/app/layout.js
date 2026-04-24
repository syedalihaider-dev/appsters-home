import 'bootstrap/dist/css/bootstrap.min.css';
import { bigShoulders, interTight } from '@/font';
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Tech Company That Provides App Solutions - Appsters",
  description: "As a digital tech company we offer innovative mobile app solutions to every type of business &amp; industry. Give your business the tech overhaul it deserves today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}