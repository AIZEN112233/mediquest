import { Poppins, Playfair_Display, Inter } from "next/font/google";

export const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "300", "100", "300"] });
export const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "500", "400", "700", "800", "900"] });
export const inter = Inter({ subsets: ["latin"], weight: ["500", "400"] });
