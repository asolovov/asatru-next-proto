import type {Metadata} from "next";
import {Jotnir} from "@/app/_components/encyclopediaLinks/beings";
import {Buri, Odin, Ymir} from "@/app/_components/encyclopediaLinks/gods";
import {Gylfaginning, OlafSaga, RagnarSaga} from "@/app/_components/encyclopediaLinks/sources";
import {Snorri} from "@/app/_components/encyclopediaLinks/history";

export const metadata: Metadata = {
    title: 'Асатру | Asatru | Аудумла',
    description: `Аудумла (Auðumla, также Auðhumla или  Auðhumbla, богатая (молоком) безрогая корова) — корова, 
    вскормившая своим молоком Первосущество — ётуна Имира.`,
    openGraph: {
        images: [{url: "https://asatru.live/og.jpg"}]
    },
    keywords: [
        "Аудумла",
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
                <h1>Аудумла</h1>
                <p>Аудумла (<b>Auðumla</b>, также <b>Auðhumla</b> или <b>Auðhumbla</b>, богатая (молоком) безрогая
                    корова) -
                    корова, вскормившая своим молоком Первосущество — <Jotnir
                        name={"ётуна"}/> <Ymir name={"Имира"}/>. Она возникла одновременно
                    с <Ymir name={"Имиром"}/> в месте, где ядовитый
                    иней Нифльхейма встречался с тёплым воздухом из огненного Муспельхейма.
                    Аудумла питалась тем, что лизала соленые камни, покрытые инеем. Из этих камней и возник предок
                    богов <Buri name={"Бури"}/>. Вот как рассказывает об
                    этом <Snorri name={"Снорри"}/> в <Gylfaginning name={"Видении Гюльви #6"} chapter={"6"}/>:
                </p>
                <div className={"quoteContainer"}>
                    <p>...Тогда спросил Ганглери: «Где жил Имир? И чем он питался?»</p>
                    <p>Высокий отвечает: «Как растаял иней, тотчас возникла из него корова по имени Аудумла, и текли из
                        ее вымени четыре молочные реки, и кормила она Имира».
                    </p>
                    <p>Тогда сказал Ганглери: «А чем же кормилась сама корова?»</p>
                    <p>Высокий говорит: «Она лизала соленые камни, покрытые инеем, и к исходу первого дня, когда она
                        лизала те камни, в камне выросли человечьи волосы, на второй день — голова, а на третий день
                        возник весь человек. Его прозывают Бури».</p>
                </div>
                <p>
                    То есть Аудумла, с её, предположительно, <Jotnir
                    name={"ётунской"}/> ( «ледяной») природой, стоит у истока двух родов,
                    она творец или, в определённом смысле, праматерь божественного начала и, в то же время — кормилица,
                    т.е. тоже мать или приёмная мать, ещё более древнего рода <Jotnir
                    name={"ётунов"}/>. Интересно, что в «Ригведе» Адити
                    — мать богов-суров или адитьев, воплощение и женского начала как всего материнского в мире, и,
                    одновременно, световой энергии вселенной — тоже изображали нередко в форме коровы. Имя богини
                    означает «несвязность, бесконечность», богиня отождествляется своими почитателями с землёй, небом,
                    а в ритуале, как уже сказано, с коровой.
                </p>
                <p>
                    Следует отметить, что скотоводство во все времена играло огромную роль в хозяйстве германских
                    племён,
                    в том числе и проживавших на территории Скандинавии. Пусть свойственное индуизму отношение к
                    коровам,
                    как к священнейшим существам, не закрепилось в европейской культуре, тем не менее, мы видим, что
                    существовал миф Творения, где корова играет одну из ключевых. Описание Тацитом процессии богини
                    плодородия Нертус, чью повозку в период священного мира влекут именно коровы, позволяет думать, что
                    и у германцев начала нашей эры в культе плодородия эти животные находились на особом счету.
                </p>
                <p>
                    Известно также упоминание в <OlafSaga name={"Саге об Олаве, сыне Трюггви"} chapter={""}/>, LXIV
                    воинственного конунга Эгвальда,
                    что «поклонялся всего больше одной корове, которую брал с собой, куда бы ни ходил в поход». Причем
                    рассказ этот вложен в уста <Odin name={"Одина"}/>-странника, и в оригинальном тексте употреблён
                    глагол <b>blóta</b>,
                    который
                    оззначает и «поклоняться», и «приносить жертвы». Согласно саге, в народной памяти сохранилось как
                    место захоронения Эгвальда, так и могила священной для него коровы.
                </p>
                <p>
                    В <RagnarSaga name={"Саге о Рагнаре Меховые Штаны"} chapter={""}/> также упоминается священная
                    корова, правда, она выступает скорее в
                    роли волшебного помощника, чем божества, впрочем, упоминание дьявола ясно говорит об отношении
                    автора к древнему культу:
                </p>
                <div className={"quoteContainer"}>
                    <p>
                        Конунг Эйстейн был могущественный, злобный и всё же умный, и было у него много людей. Он жил в
                        Уппсале. Он был ревностный язычник, и в то время в Уппсале совершалось столь много
                        жертвоприношений, как нигде в Северных Странах. Они очень верили в одну корову, которую называли
                        Сибилья. Ей очень поклонялись, и никто не мог противостоять её мычанию. И поэтому конунг привык,
                        когда ожидалась вражеская армия, чтобы эта самая корова шла перед полками, и столь великая мощь
                        дьявола содействовала ей, что недруги его сходили с ума, когда слышали её, и бились сами с собой,
                        потеряв осторожность.
                    </p>
                </div>
                <p>
                    Дошедший до нас миф ничего не говорит о том, что стало с Аудумлой после убийства <Ymir
                    name={"Имира"}/>. Однако тот
                    факт, что в Скандинавии помнили о поклонении некой корове или коровам в условно-историческую
                    (героическую) эпоху, может быть указанием на то, что материнская сила, в форме коровы воплощённая,
                    виделась людям по-прежнему действующей.
                </p>
            </div>
        </main>
    )
}