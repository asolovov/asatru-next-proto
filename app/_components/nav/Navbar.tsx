'use client'

import Link from "next/link";
import Image from "next/image";
import {Nav, NavLogoLink} from "@/app/_components/nav/styles";

export default function Navbar() {
    return (
        <Nav>
            <Link href={"/"} passHref>
                <NavLogoLink>
                    <Image src={"/valknut_white.png"} alt={"valknut"} height={50} width={50}/>
                    <span>Асатру</span>
                </NavLogoLink>
            </Link>
        </Nav>
    )
}