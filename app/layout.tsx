import type {Metadata} from 'next'
import './globals.css'
import StyledComponentsRegistry from "@/lib/styledComponents/styledComponentsRegister";
import Navbar from "@/app/_components/nav/Navbar";

export const metadata: Metadata = {
    title: 'Асатру | Asatru',
    description: `Асатру (др. исл. Ásatrú, от слов Ás «бог» и trú «вера, доверие») – современное название 
  политеистической религии, основанной на дохристианских традициях и верованиях Скандинавии эпохи викингов.`,
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <body>
        <StyledComponentsRegistry>
            <Navbar/>
            {children}
        </StyledComponentsRegistry>
        </body>
        </html>
    )
}
