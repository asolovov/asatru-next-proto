import type {Metadata} from 'next'
import './globals.css'
import Navbar from "@/app/_components/nav/Navbar";
import Footer from "@/app/_components/footer/Footer";

export const metadata: Metadata = {
    title: 'Асатру | Asatru',
    description: `Асатру (др. исл. Ásatrú, от слов Ás «бог» и trú «вера, доверие») – современное название 
  политеистической религии, основанной на дохристианских традициях и верованиях Скандинавии эпохи викингов.`,
    openGraph: {
        images: [{url: "https://asatru.live/og.jpg"}]
    },
    keywords: [
        "Асатру",
        "Северная Традиция",
        "Блот",
        "Германское язычество",
        "Asatru",
        "Blot",
        "Heathenry",
        "Северное язычество",
        "Скандинавское язычество",
        "Скандинавские боги",
        "Германские боги",
        "Религиия викингов"
    ]
}

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
