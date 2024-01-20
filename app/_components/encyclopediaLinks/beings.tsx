import Link from "next/link";

export function Asir({name}: {name: string}) {
    return (
        <Link
            target={"_blank"}
            className={"link linkOwn"}
            href={"/encyclopedia/asir"}>{name}</Link>
    )
}

export function Vanir({name}: {name: string}) {
    return (
        <Link
            target={"_blank"}
            className={"link linkOwn"}
            href={"/encyclopedia/vanir"}>{name}</Link>
    )
}

export function Jotnir({name}: {name: string}) {
    return (
        <Link
            target={"_blank"}
            className={"link linkOut"}
            href={"https://norroen.info/wiki/%D0%81%D1%82%D1%83%D0%BD%D1%8B"}>{name}</Link>
    )
}

export function AskEndEmbla({name}: {name: string}) {
    return (
        <Link
            target={"_blank"}
            className={"link linkOut"}
            href={"http://norroen.info/wiki/Аск_и_Эмбла"}>{name}</Link>
    )
}

export function Audumla({name}: {name: string}) {
    return (
        <Link
            target={"_blank"}
            className={"link linkOwn"}
            href={"/encyclopedia/audumla"}>{name}</Link>
    )
}

export function Nornir({name}: {name: string}) {
    return (
        <Link
            target={"_blank"}
            className={"link linkOut"}
            href={"https://norroen.info/wiki/%D0%9D%D0%BE%D1%80%D0%BD%D1%8B"}>{name}</Link>
    )
}

export function Valkyrir({name}: {name: string}) {
    return (
        <Link
            target={"_blank"}
            className={"link linkOut"}
            href={"https://norroen.info/wiki/%D0%92%D0%B0%D0%BB%D1%8C%D0%BA%D0%B8%D1%80%D0%B8%D0%B8"}>{name}</Link>
    )
}

export function Alvar({name}: {name: string}) {
    return (
        <Link
            target={"_blank"}
            className={"link linkOut"}
            href={"https://norroen.info/wiki/%D0%90%D0%BB%D1%8C%D0%B2%D1%8B"}>{name}</Link>
    )
}

export function Disir({name}: {name: string}) {
    return (
        <Link
            target={"_blank"}
            className={"link linkOut"}
            href={"https://norroen.info/wiki/%D0%94%D0%B8%D1%81%D1%8B"}>{name}</Link>
    )
}

export function Dvergr({name}: {name: string}) {
    return (
        <Link
            target={"_blank"}
            className={"link linkOut"}
            href={"http://norroen.info/wiki/Дверги"}>{name}</Link>
    )
}

