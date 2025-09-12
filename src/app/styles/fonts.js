import { Cormorat_Garamond } from "next/font/google"; // importando o pacote de fontes do Google no Next.js

// configura as fontes
export const cormorant = Cormorat_Garamond({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-titulo-cormorant'
});
