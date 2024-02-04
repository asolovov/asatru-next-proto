import type {Metadata} from "next";
import Link from "next/link";
import {Alsvin, Njord} from "@/app/_components/encyclopediaLinks/gods";
import {Alvar, Asir, Audumla, Vanir} from "@/app/_components/encyclopediaLinks/beings";
import {Asgard} from "@/app/_components/encyclopediaLinks/heims";
import {Blot} from "@/app/_components/encyclopediaLinks/terms";
import {Mjolnir} from "@/app/_components/encyclopediaLinks/artifacts";
import {SturlungaNC} from "@/app/_components/encyclopediaLinks/sources";

export const metadata: Metadata = {
    title: 'Асатру | Asatru | Энциклопедия',
    description: `Энциклопедия asatru.live: статьи тщательно отобраны или написаны нашей командой для объективного описания терминов, часто употребляемых в Асатру`,
    openGraph: {
        images: [{url: "https://asatru.live/og.jpg"}]
    },
    keywords: [
        "Асатру",
        "Северная Традиция",
        "Блот",
        "Германское язычество",
        "Asatru",
        "Blot",
        "Heathenry",
        "Северное язычество",
        "Скандинавское язычество",
        "Скандинавские боги",
        "Германские боги",
        "Религиия викингов"
    ]
}

export default function Home() {
    return (
        <main className={"main"}>
            <h1 className={"point"}>Энциклопедия</h1>
            <div className={"mainText"}>
                <p>
                    Сатьи энциклопедии были тщательно отобраны или написаны эксклюзивно для портала <b
                    className={"point"}>asatru.live</b> нашей небольшой командой с целью максимально объективно и
                    всесторонне описать те или иные
                    термины, повсеместно встречающиеся среди последователей Асатру. Энциклопедия постоянно поплоняется
                    новыми статьями.
                </p>
                <p>
                    В тексте часто будут встречаться ссылки на портал «<Link
                    target={"_blank"}
                    className={"link linkOut"}
                    href={`http://norroen.info`}>Северная Слава</Link>», на наш взгляд - лучший сборник
                    оригиналов и переводов источников по Северной Традиции.
                </p>
                <ul>
                    <li>
                        <Alsvin name={"Альсвинн и Арвак"}/>
                    </li>
                    <li>
                        <Alvar name={"Альвы"}/>
                    </li>
                    <li>
                        <Asgard name={"Асгард"}/>
                    </li>
                    <li>
                        <Asir name={"Асы"}/>
                    </li>
                    <li>
                        <Audumla name={"Аудумла"}/>
                    </li>
                    <li>
                        <Blot name={"Блот (жертвоприношение)"}/>
                    </li>
                    <li>
                        <Mjolnir name={"Мёльнир или Молот Тора"}/>
                    </li>
                    <li>
                        <Njord name={"Ньёрд"}/>
                    </li>
                    <li>
                        <SturlungaNC name={"Сага о Стурлунгах"}/>
                    </li>
                    <li>
                        <Vanir name={"Ваны"}/>
                    </li>
                </ul>
            </div>
        </main>
    )
}