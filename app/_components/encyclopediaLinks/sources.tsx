import Link from "next/link";

export function Gylfaginning({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link
            target={"_blank"}
            className={"link linkOut"}
            href={`https://norroen.info/src/snorra/2ru.html#${chapter}`}>{name}</Link>»</>
    )
}

export function Grimnirs({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link
            target={"_blank"}
            className={"link linkOut"}
            href={`https://norroen.info/src/edda/grimnis/ru.html`}>{name}</Link>»</>
    )
}

export function Alvis({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link
            target={"_blank"}
            className={"link linkOut"}
            href={`http://norroen.info/src/edda/alvis/`}>{name}</Link>»</>
    )
}

export function Sigrdrif({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link
            target={"_blank"}
            className={"link linkOut"}
            href={`https://norroen.info/src/edda/sigrdrif/`}>{name}</Link>»</>
    )
}

export function SnorriEdda({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link
            target={"_blank"}
            className={"link linkOut"}
            href={`https://norroen.info/src/snorra/`}>{name}</Link>»</>
    )
}

export function Edda({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link
            target={"_blank"}
            className={"link linkOut"}
            href={`https://norroen.info/src/edda/`}>{name}</Link>»</>
    )
}

export function Voluspa({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link
            target={"_blank"}
            className={"link linkOut"}
            href={`https://norroen.info/src/edda/voluspa/`}>{name}</Link>»</>
    )
}

export function Inglinge({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link
            target={"_blank"}
            className={"link linkOut"}
            href={`http://norroen.info/src/konung/heimskringla/ynglinga/ru.html`}>{name}</Link>»</>
    )
}

export function OlafSaga({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link target={"_blank"} className={"link linkOut"}
                 href={"https://norroen.info/src/konung/heimskringla/olaf-tr/ru.html"}>{name}</Link>»</>
    )
}

export function RagnarSaga({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link target={"_blank"} className={"link linkOut"}
                 href={"https://norroen.info/src/forn/ragnar/"}>{name}</Link>»</>
    )
}
export function Sagas({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link target={"_blank"} className={"link linkOut"}
                 href={"https://norroen.info/src/abc.html"}>{name}</Link>»</>
    )
}