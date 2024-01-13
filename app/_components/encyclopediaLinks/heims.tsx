import Link from "next/link";

export function Asgard({name}: {name: string}) {
    return (
        <Link
            target={"_blank"}
            className={"link"}
            href={`/encyclopedia/asgard`}>{name}</Link>
    )
}

export function Iggdrasil({name}: {name: string}) {
    return (
        <Link
            target={"_blank"}
            className={"link"}
            href={`http://norroen.info/wiki/Иггдрасиль`}>{name}</Link>
    )
}
export function Midgard({name}: {name: string}) {
    return (
        <Link
            target={"_blank"}
            className={"link"}
            href={`http://norroen.info/wiki/Мидгард`}>{name}</Link>
    )
}
