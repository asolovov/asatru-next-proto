import Link from "next/link";

export function Gylfaginning({name, chapter}: {name: string, chapter: string}) {
    return (
        <>“<Link
            target={"_blank"}
            className={"link"}
            href={`https://norroen.info/src/snorra/2ru.html#${chapter}`}>{name}</Link>”</>
    )
}

export function Grimnirs({name, chapter}: {name: string, chapter: string}) {
    return (
        <>“<Link
            target={"_blank"}
            className={"link"}
            href={`https://norroen.info/src/edda/grimnis/ru.html`}>{name}</Link>”</>
    )
}

export function SnorriEdda({name, chapter}: {name: string, chapter: string}) {
    return (
        <>“<Link
            target={"_blank"}
            className={"link"}
            href={`https://norroen.info/src/snorra/`}>{name}</Link>”</>
    )
}

export function Edda({name, chapter}: {name: string, chapter: string}) {
    return (
        <>“<Link
            target={"_blank"}
            className={"link"}
            href={`https://norroen.info/src/edda/`}>{name}</Link>”</>
    )
}

export function Voluspa({name, chapter}: {name: string, chapter: string}) {
    return (
        <>“<Link
            target={"_blank"}
            className={"link"}
            href={`https://norroen.info/src/edda/voluspa/`}>{name}</Link>”</>
    )
}

export function Inglinge({name, chapter}: {name: string, chapter: string}) {
    return (
        <>“<Link
            target={"_blank"}
            className={"link"}
            href={`http://norroen.info/src/konung/heimskringla/ynglinga/ru.html`}>{name}</Link>”</>
    )
}
export function OlafSaga({name, chapter}: {name: string, chapter: string}) {
    return (
        <>“<Link target={"_blank"} className={"link"}
                 href={"https://norroen.info/src/konung/heimskringla/olaf-tr/ru.html"}>{name}</Link>”</>
    )
}
