import Link from "next/link";

export function Gylfaginning({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link
            target={"_blank"}
            className={"link linkOut"}
            href={`https://norroen.info/src/snorra/2ru.html#${chapter}`}>{name}</Link>»</>
    )
}

export function Skaldskaparmal({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link
            target={"_blank"}
            className={"link linkOut"}
            href={`http://norroen.info/src/snorra/3ru.html#${chapter}`}>{name}</Link>»</>
    )
}

export function Grimnirs({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link
            target={"_blank"}
            className={"link linkOut"}
            href={`https://norroen.info/src/edda/grimnis/ru.html#${chapter}`}>{name}</Link>»</>
    )
}

export function Havamal({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link
            target={"_blank"}
            className={"link linkOut"}
            href={`https://norroen.info/src/edda/havamal/`}>{name}</Link>»</>
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
            href={`https://norroen.info/src/edda/sigrdrif/ru.html#${chapter}`}>{name}</Link>»</>
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
            href={`https://norroen.info/src/edda/voluspa/ru.html#${chapter}`}>{name}</Link>»</>
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
export function HakonSaga({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link target={"_blank"} className={"link linkOut"}
                 href={"http://norroen.info/src/konung/heimskringla/hakon-g/ru.html"}>{name}</Link>»</>
    )
}
export function Sagas({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link target={"_blank"} className={"link linkOut"}
                 href={"https://norroen.info/src/abc.html"}>{name}</Link>»</>
    )
}

export function Eyrbygg({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link target={"_blank"} className={"link linkOut"}
                 href={"http://norroen.info/src/isl/eyrbygg/"}>{name}</Link>»</>
    )
}

export function Beowulf({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link target={"_blank"} className={"link linkOut"}
                 href={"http://norroen.info/src/other/beowulf/beowulf.html"}>{name}</Link>»</>
    )
}

export function Gisli({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link target={"_blank"} className={"link linkOut"}
                 href={"http://norroen.info/src/isl/gisli/ru.html"}>{name}</Link>»</>
    )
}

export function Thrym({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link target={"_blank"} className={"link linkOut"}
                 href={`http://norroen.info/src/edda/thrym/ru2.html#${chapter}`}>{name}</Link>»</>
    )
}

export function Fafnis({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link target={"_blank"} className={"link linkOut"}
                 href={`https://norroen.info/src/edda/fafnis/ru.html#${chapter}`}>{name}</Link>»</>
    )
}

export function OlafHelgSaga({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link target={"_blank"} className={"link linkOut"}
                 href={`https://norroen.info/src/konung/heimskringla/olaf-helg/ru.html#${chapter}`}>{name}</Link>»</>
    )
}

export function Sighvatr({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link target={"_blank"} className={"link linkOut"}
                 href={`https://norse.ulver.com/src/sk/sighvatr.html#${chapter}`}>{name}</Link>»</>
    )
}

export function OlafAlv({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link target={"_blank"} className={"link linkOut"}
                 href={`https://vk.com/@german_tradition-pryad-ob-olave-alve-geirstadira`}>{name}</Link>»</>
    )
}

export function Kormak({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link target={"_blank"} className={"link linkOut"}
                 href={`https://norroen.info/src/isl/kormak/ru.html#${chapter}`}>{name}</Link>»</>
    )
}

export function Vigaglum({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link target={"_blank"} className={"link linkOut"}
                 href={`https://norroen.info/src/isl/vigaglum/ru.html#${chapter}`}>{name}</Link>»</>
    )
}

export function Brandkrossi({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link target={"_blank"} className={"link linkOut"}
                 href={`https://norroen.info/src/isl/brandkrossi/ru2.html#${chapter}`}>{name}</Link>»</>
    )
}

export function Vatnsd({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link target={"_blank"} className={"link linkOut"}
                 href={`http://norroen.info/src/isl/vatnsd/ru.html#${chapter}`}>{name}</Link>»</>
    )
}

export function Vafthrudnis({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link target={"_blank"} className={"link linkOut"}
                 href={`http://norroen.info/src/edda/vafthrudnis/ru.html#${chapter}`}>{name}</Link>»</>
    )
}

export function EgilSaga({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link target={"_blank"} className={"link linkOut"}
                 href={`http://norroen.info/src/isl/egil/ru.html#${chapter}`}>{name}</Link>»</>
    )
}

export function Lokasenna({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link target={"_blank"} className={"link linkOut"}
                 href={`http://norroen.info/src/edda/lokasenna/rut.htmll#${chapter}`}>{name}</Link>»</>
    )
}

export function Landnamabok({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link target={"_blank"} className={"link linkOut"}
                 href={`http://norroen.info/src/lnb/`}>{name}</Link>»</>
    )
}

export function SturlungaNC({name}: {name: string}) {
    return (
        <><Link target={"_blank"} className={"link linkOwn"}
                 href={`/encyclopedia/sturlunga`}>{name}</Link></>
    )
}

export function Sturlunga({name, chapter}: {name: string, chapter: string}) {
    return (
        <>«<Link target={"_blank"} className={"link linkOwn"}
                 href={`/encyclopedia/sturlunga`}>{name}</Link>»</>
    )
}