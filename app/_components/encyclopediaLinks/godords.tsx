import Link from "next/link";


export function Beinteinsson({name}: {name: string}) {
    return (
        <Link
            target={"_blank"}
            className={"link"}
            href={"https://en.wikipedia.org/wiki/Sveinbj%C3%B6rn_Beinteinsson"}>{name}</Link>
    )
}

export function Asatrufelagid({name}: {name: string}) {
    return (
        <Link
            target={"_blank"}
            className={"link"}
            href={"https://asatru.is/"}>{name}</Link>
    )
}

