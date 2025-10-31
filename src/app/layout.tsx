import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "CodingKraqs",
  description: "Learn to CODE, build, and KRAQ the future!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-gray-900 scroll-smooth">
        <Navbar />
        <main className="pt-24 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
