import type { Metadata } from "next";
import { pathname } from "next-extra/pathname";
import { Montserrat, Vidaloka } from "next/font/google";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/globals.css";
import "@/styles/custom.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import BackToTop from "@/components/BackToTop";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
});

const vidaloka = Vidaloka({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-vidaloka",
});

export const metadata: Metadata = {
  title: {
    template: "%s | FKT Consulting",
    default: "FKT Consulting",
  },
  description: "FKT Consulting est un cabinet de conseil en actuariat",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { slug: string };
}>) {
  return (
    <html lang="fr" className={vidaloka.variable}>
      <body className={`${montserrat.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <AnimateOnScroll />
        <BackToTop />
      </body>
    </html>
  );
}
