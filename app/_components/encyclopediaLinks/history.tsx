import Link from "next/link";

export function Snorri({name}: {name: string}) {
    return (
        <Link
            target={"_blank"}
            className={"link"}
            href={`https://norroen.info/src/snorra/litmon/stk.html`}>{name}</Link>
    )
}
