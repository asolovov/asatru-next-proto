'use client'

import {useState} from "react";
import {FaBars} from "react-icons/fa";
import Link from "next/link";

export default function NavbarMenu() {
    const [isMobileNavShown, setIsMobileNavShown] = useState(false);
    return (
        <>
            <FaBars className={"bars"} onClick={() => setIsMobileNavShown(!isMobileNavShown)}/>
            <div className={`collapseNavBar ${isMobileNavShown ? "cnbShow" : "cnbHide"}`}>
                <ul className={"navBarMenu"}>
                    <li className={"navItem"}>
                        <Link href={"/encyclopedia"}>Энциклопедия</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}