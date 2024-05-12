import Link from "next/link";

export function Snorri({name}: {name: string}) {
    return (
        <Link
            target={"_blank"}
            className={"link linkOwn"}
            href={`/encyclopedia/snorri-sturluson`}>{name}</Link>
    )
}
