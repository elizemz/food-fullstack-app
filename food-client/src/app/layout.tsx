import { Header } from "@/components/Header";
import "./scss/globals.scss";
import { ThemeProvider } from "@/theme";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";

import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "@/context/UserProvider";
import { CategoryProvider } from "@/context/CategoryProvider";
import { FoodProvider } from "@/context/FoodProvider";
import { BasketProvider } from "@/context/BasketProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <UserProvider>
            <CategoryProvider>
              <FoodProvider>
                <BasketProvider>
                  <Header />
                  {children}
                  <Footer />
                  <ToastContainer />
                </BasketProvider>
              </FoodProvider>
            </CategoryProvider>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
