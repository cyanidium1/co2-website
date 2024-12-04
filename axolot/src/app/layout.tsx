import "../../styles/bootstrap.min.css";
import "../../styles/animate.min.css";
import "../../styles/icofont.min.css";
import "swiper/css";
import "swiper/css/bundle";
import "react-accessible-accordion/dist/fancy-example.css";
// Global Styles
import "../../styles/style.css";
import "../../styles/responsive.css";

import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import GoTop from "@/components/Layout/GoTop";
import AosAnimation from "@/components/Layout/AosAnimation";

const fira_sans = Fira_Sans({ 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title:
    "Axolot - React Nextjs IT Solutions & Technology Services Company Template",
  description:
    "React Nextjs IT Solutions & Technology Services Company Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fira_sans.className}>
        {children}

        <GoTop />

        <AosAnimation />
      </body>
    </html>
  );
}
