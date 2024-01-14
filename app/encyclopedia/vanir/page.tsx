import type {Metadata} from "next";
import {
    Freir, Freya,
    Njord,
    Odin,
} from "@/app/_components/encyclopediaLinks/gods";
import {Alvar, Asir, Disir, } from "@/app/_components/encyclopediaLinks/beings";
import {Alvis, Inglinge, Voluspa} from "@/app/_components/encyclopediaLinks/sources";
import {Snorri} from "@/app/_components/encyclopediaLinks/history";

export const metadata: Metadata = {
    title: 'Асатру | Asatru | Ваны',
    description: `Ваны (мн.ч. vanir, ед. ч. vanr, значения слова vanr, возможно, омонима к названию божеств:
                    1)привычный, обычный 2)сладострастный) – группа божеств, которую принято связывать с плодородием,
                    достатком и благосостоянием, а также с миром.`,
    openGraph: {
        images: [{url: "https://asatru.live/og.jpg"}]
    },
    keywords: [
        "Ваны",
        "Боги Ваны",
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
            <div className={"articleContainer"}>
                <h1>Ваны, Ван</h1>
                <p>
                    Ваны (мн.ч. <b>vanir</b>, ед. ч. <b>vanr</b>, значения слова <b>vanr</b>, возможно, омонима к названию божеств:
                    1)привычный, обычный 2)сладострастный) – группа божеств, которую принято связывать с плодородием,
                    достатком и благосостоянием, а также с миром. К ванам относят <Njord name={"Ньёрда"}/> и его детей,
                    близнецов <Freir name={"Фрейра"}/> и <Freya name={"Фрейю"}/>, возможно – Гюлльвейг и Ньёрун.
                    Также <Snorri name={"Снорри"}/> в <Inglinge
                    name={"Cаге об Инглингах"} chapter={""}/> упоминает некую Вану из
                    Ванахейма, которая, согласно евгемерическому рассказу, стала женой конунга Свейгдира из династии
                    Инглингов. Вероятно, эта Вана - всего лишь литературный персонаж, созданный <Snorri name={"Снорри"}/>.
                </p>
                <p>
                    Обычаи ванов отличались от таковых у племени <Asir name={"асов"}/>: ваны используют магию сейда, среди них
                    допускались браки между братьями и сёстрами, <Alvis name={"Речи Альвиса"} chapter={""}/> сообщают об особом языке (или стиле
                    речи) ванов.
                </p>
                <p>
                    Хотя ваны считаются божествами, предпочитающими мир (так в святилище <Freir name={"Фрейра"}/> нельзя было входить с
                    мечом), первое их упоминание в <Voluspa name={"Прорицании вёльвы"}
                                                            chapter={""}/> связано с войной их с <Asir name={"асами"}/>. Причины войны богов
                    не до конца ясны, по-видимому, к ней причастно либо колдовство и интриги явившейся к <Asir name={"асам"}/> Гюлльвейг,
                    либо её убийство за это <Asir name={"асами"}/>. Также не вполне ясен из истоников ход войны, известно лишь, что в
                    итоге <Asir name={"асы"}/> и ваны заключили мир и обменялись заложниками, и с тех
                    пор <Njord name={"Ньёрд"}/>, <Freir name={"Фрейр"}/> и <Freya name={"Фрейя"}/> стали жить
                    среди <Asir name={"асов"}/>.
                </p>
                <p>
                    Хотя исследователи иногда сомневаются в том, использовался ли термин ”ваны” вне исландской
                    литературной традиции, поклонение богам из этой группы, несомненно, очень древнее. Культ <Njord name={"Ньёрда"}/>
                    считают восходящим к германскому культу Нертус, засвидетельствованному ещё Тацитом в I веке нашей
                    эры. Самого <Njord name={"Ньёрда"}/> исследователи считают либо мужской парой к этой богине, либо переосмыслением её
                    сути. На основании скандинавской (в основном, шведской) топонимики, северные имена этой пары божеств
                    некоторые учёные восстанавливают до пары ”Ньёрд и Ньярд” или “Ньёрд и Ньёрун”.
                </p>
                <p>
                    То, что мы знаем о <Freir name={"Фрейре"}/> и <Freya name={"Фрейе"}/>, указывают на их тесную связь
                    с миром умерших, миром <Alvar name={"альвов"}/> и <Disir name={"дис"}/>:
                    <Freir name={"Фрейр"}/> владеет Альвхеймом, жертвоприношения <Freir name={"Фрейру"}/> и <Alvar
                    name={"альвам"}/> проводят в одно и то же время (возможно
                    даже, что Альваблот и Фрейсблот – разные названия одного обряда), <Freya name={"Фрейя"}/> принимает половину павших в
                    боях, деля их с <Odin name={"Одином"}/>, и к ней попадают умершие женщины. В связи с этим можно предположить, что
                    культ <Freir name={"Фрейра"}/> и <Freya name={"Фрейи"}/>, как и культ ванов в целом, развился из почитания божественных первопредков
                    племён. И это подтверждает тот факт, что название ветви германских племён ингвионы (Ingaevones)
                    возводят к протогерманскому <b>*Ingwaz</b>, в более ранней форме <b>*Inguz</b>. И <Freir name={"Фрейра"}/> также зовут Ингви-Фрейр
                    (<b>Yngvi-Freyr</b>, господин Ингви), где <b>Yngvi</b> восходит в той же основе. Иными словами, скорее всего, эти
                    племена считали Ингваза (Фрейра), своим эпонимическим предком. И таким же первопредком был <Freir name={"Фрейр"}/> для
                    королевской династии Инглингов в Швеции и Норвегии.
                </p>
            </div>
        </main>
    )
}