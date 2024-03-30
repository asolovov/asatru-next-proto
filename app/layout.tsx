import type {Metadata} from 'next'
import './globals.css'
import Navbar from "@/app/_components/nav/Navbar";
import Footer from "@/app/_components/footer/Footer";
import {defaultMetadata} from "@/app/_components/metadata/defaultMetadata";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}
