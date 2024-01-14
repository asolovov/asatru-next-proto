import Link from "next/link";

export function Heathenry({name}: {name: string}) {
    return (
        <Link
            target={"_blank"}
            className={"link"}
            href={`https://en.wikipedia.org/wiki/Heathenry_(new_religious_movement)`}>{name}</Link>
    )
}
