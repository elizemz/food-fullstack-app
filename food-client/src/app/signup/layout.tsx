import { ThemeProvider } from "@/theme";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
