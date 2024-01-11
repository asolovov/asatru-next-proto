import type {Metadata} from 'next'
import './globals.css'
import StyledComponentsRegistry from "@/lib/styledComponents/styledComponentsRegister";
import Navbar from "@/app/_components/nav/Navbar";
import Footer from "@/app/_components/footer/Footer";

export const metadata: Metadata = {
    title: 'Асатру | Asatru',
    description: `Асатру (др. исл. Ásatrú, от слов Ás «бог» и trú «вера, доверие») – современное название 
  политеистической религии, основанной на дохристианских традициях и верованиях Скандинавии эпохи викингов.`,
    openGraph: {
        images: [
            {
                url: "https://asatru.live/opengraph-image.jpg"
            }
        ]
    }
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <body>
        <StyledComponentsRegistry>
            <Navbar/>
            {children}
            <Footer/>
        </StyledComponentsRegistry>
        </body>
        </html>
    )
}
