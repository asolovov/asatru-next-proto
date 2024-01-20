import Link from "next/link";

export function Snorri({name}: {name: string}) {
    return (
        <Link
            target={"_blank"}
            className={"link linkOut"}
            href={`https://norroen.info/src/snorra/litmon/stk.html`}>{name}</Link>
    )
}
