import "./scss/globals.scss";
import { ThemeProvider } from "@/theme";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UserProvider } from "@/context/UserProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <UserProvider>{children}</UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
