import Link from "next/link";
import Image from "next/image";
import "./navbar.css"

export default function Navbar() {
    return (
        <nav className={"nav"}>
            <Link href={"/"} passHref>
                <div className={"navLogoLink"}>
                    <Image src={"/valknut_white.png"} alt={"valknut"} height={50} width={50}/>
                    <span>Асатру</span>
                </div>
            </Link>
        </nav>
    )
}