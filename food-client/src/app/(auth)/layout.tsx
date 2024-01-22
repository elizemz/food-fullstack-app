import { ThemeProvider } from "@/theme";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
