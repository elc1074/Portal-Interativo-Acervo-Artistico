//import { Metadata } from "next";
import "./styles/globals.css";
import { cormorant } from "@/app/styles/fonts";

export const metadata = {
  title: "mosai | Acervo ArtÍstico UFSM",
  description: "Portal de exposições e obras do Acervo Artístico da UFSM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
