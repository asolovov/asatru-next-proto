import Link from "next/link";

export function Asir({name}: {name: string}) {
    return (
        <Link
            target={"_blank"}
            className={"link"}
            href={"/encyclopedia/asir"}>{name}</Link>
    )
}

export function Vanir({name}: {name: string}) {
    return (
        <Link
            target={"_blank"}
            className={"link"}
            href={"/encyclopedia/vanir"}>{name}</Link>
    )
}

export function Jotnir({name}: {name: string}) {
    return (
        <Link
            target={"_blank"}
            className={"link"}
            href={"https://norroen.info/wiki/%D0%81%D1%82%D1%83%D0%BD%D1%8B"}>{name}</Link>
    )
}

export function Audumla({name}: {name: string}) {
    return (
        <Link
            target={"_blank"}
            className={"link"}
            href={"/encyclopedia/audumla"}>{name}</Link>
    )
}

