import Navbar from "../components/Navbar";
import "./globals.css";
import { AppContextProvider } from "@/contexts/AppContext";

export const metadata = {
  title: "🌿 Ecoyaan",
  description: "A simplified checkout experience built with Next.js demonstrating server-side rendering, cart management, shipping address collection, and payment confirmation",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <AppContextProvider>
          <Navbar />
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
