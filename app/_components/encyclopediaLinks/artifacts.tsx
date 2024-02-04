import Link from "next/link";

export function Mjolnir({name}: {name: string}) {
    return (
        <Link
            className={"link linkOwn"}
            href={"/encyclopedia/mjolnir"}>{name}</Link>
    )
}