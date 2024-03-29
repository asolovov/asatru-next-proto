import Link from "next/link";

export function Heathenry({name}: {name: string}) {
    return (
        <Link
            target={"_blank"}
            className={"link linkOut"}
            href={`https://en.wikipedia.org/wiki/Heathenry_(new_religious_movement)`}>{name}</Link>
    )
}

export function Mjod({name}: {name: string}) {
    return (
        <Link
            target={"_blank"}
            className={"link linkOut"}
            href={`https://norroen.info/wiki/Мёд_поэзии`}>{name}</Link>
    )
}

export function Blot({name}: {name: string}) {
    return (
        <Link
            className={"link linkOwn"}
            href={`/encyclopedia/blot`}>{name}</Link>
    )
}
