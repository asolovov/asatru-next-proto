import Link from "next/link";
import Image from "next/image";
import "./navbar.css"
import NavbarMenu from "@/app/_components/nav/NavMenu";

export default function Navbar() {
    return (
        <nav className={"nav"}>
            <Link href={"/"} passHref>
                <div className={"navLogoLink"}>
                    <Image src={"/ring_white.png"} alt={"ring"} height={50} width={50}/>
                    <span style={{marginLeft: 10}}>Ásatrú</span>
                </div>
            </Link>
            {/*<div>*/}
                <div className={`notCollapseNavBar`}>
                    <ul className={"navBarMenu"}>
                        <li className={"navItemFixed"}>
                            <Link href={"/encyclopedia"}>Энциклопедия</Link>
                        </li>
                    </ul>
                </div>
            {/*</div>*/}
            {/*<NavbarMenu/>*/}
        </nav>
    )
}