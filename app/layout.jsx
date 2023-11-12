import Navbar from "@/components/Navbar";
import "./globals.css";
import { poppins } from "@/fonts";

export const metadata = {
    title: "MediQuest",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${poppins.className} bg-black text-white`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
