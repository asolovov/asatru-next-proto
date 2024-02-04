import type {Metadata} from "next";
import {Alvar, Asir, Dvergr, Jotnir, Valkyrir, Vanir} from "@/app/_components/encyclopediaLinks/beings";
import {
    Baldr,
    Forseti, Freir,
    Freya,
    Heimdallr,
    Loki, Njord,
    Odin,
    Skadi,
    Thor,
    Tjazi,
    Ullr, Vidar
} from "@/app/_components/encyclopediaLinks/gods";
import {Grimnirs, Gylfaginning} from "@/app/_components/encyclopediaLinks/sources";

export const metadata: Metadata = {
    title: 'Асатру | Asatru | Асгард',
    description: `Асгард (Ásgarðr,ограда асов) – мир асов, в более узком смысле слова – селение асов в этом мире.`,
    openGraph: {
        images: [{url: "https://asatru.live/og.jpg"}]
    },
    keywords: [
        "Асгард",
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
                <h1 className={"point"}>Асгард</h1>
                <p>
                    Асгард (<b>Ásgarðr</b>, ограда асов) – мир <Asir name={"асов"}/>, в более узком смысле слова –
                    селение <Asir name={"асов"}/> в этом мире.
                    Локализация миров в скандинавской мифологии неоднозначна, но Асгард ассоциируется с небом, верхним
                    миром, возвышенностью, горами. Попасть туда можно по небесному пылающему мосту-радуге Биврёсту
                    (<b>Bifröst</b>, Мерцающий путь или Колеблющаяся дорога, этимологии разнятся), который охраняет
                    страж
                    Асгарда <Heimdallr name={"Хеймдалль"}/>. В <Grimnirs name={"Речах Гримнира"} chapter={""}/> есть
                    указания, что окружает владения богов небесный поток Тунд
                    (<b>Þund</b>, вздувшийся), вероятно, представляющий из себя потоки воздуха, ветер и бурю. Эту
                    преграду
                    должны преодолеть павшие в битве, чтобы достигнуть Вальхаллы.
                </p>
                <p>
                    Асгард окружен стеной, защищающей его от <Jotnir name={"ётунов"}/> и горных великанов. Построил эту
                    стену некий великан
                    со своим волшебным жеребцом Свадильфари по наущению хитроумного <Loki name={"Локи"}/>, насмешник же
                    сумел избавить
                    богов от непомерной платы за работу, не отдав строителю Солнце, Луну и <Freya
                    name={"Фрейю"}/> (<Gylfaginning name={"Видение Гюльви, 24"} chapter={"42"}/>).
                </p>
                <p>
                    Знаменательно, что лишь два мира, мир богов <b>Ásgarðr</b> и мир людей <b>Miðgarðr</b>, содержат в
                    своём названии
                    указание на отгороженность (корень <b>garðr</b>), маркер окультуренного, упорядоченного пространства
                    (название <b>Útgarðr</b> означает «вне ограды» и такому пространству противопоставляется).
                </p>
                <p>
                    В Асгарде расположены владения богов, перечисленные в <Grimnirs name={"Речах Гримнира, 4-17"}
                                                                                    chapter={"4"}/>: <Odin
                    name={"Один"}/> правит
                    Гладсхеймом (<b>Glaðsheimr</b>, жилище радости) с чертогами Вальхаллы (<b>Valhöll</b>, палата
                    убитых), а также,
                    будучи предводителем богов – всем Асгардом. <Thor name={"Тор"}/> владеет Трудхеймом
                    (<b>Þrúðheimr</b>, жилище силы) с
                    палатами Бильскирнир (<b>Bilskirrnir</b>, внезапный сполох (отсылка к молнии)), <Ullr
                    name={"Улль"}/> – Идаллиром (<b>Ýdalir</b>,
                    долины тиса), Саге принадлежит Сёкквабекк, (<b>Sökkvabekkr</b>, погружённая скамья), <Skadi
                    name={"Скади"}/> обитает в
                    Трюмхейме (<b>Þrymheimr</b>, жилище шума). Интересно, что Трюмхейм был домом великана Тьяцци до
                    гибели
                    последнего, и, судя по всему, относился к области Ётунхейма. Но примирение его дочери с <Asir
                    name={"асами"}/> и
                    вхождение её в круг богов сделали и её жилище частью Асгарда, горнего мира. В Брейдаблике
                    (<b>Breiðablik</b>, широкий блеск) стоят палаты <Baldr name={"Бальдра"}/>, <Heimdallr
                    name={"Хеймдалль"}/> обитает в Химинбьёрге (<b>Himinbjörg</b>,
                    небесные горы), <Freya name={"Фрейя"}/> владеет Фольквангом (Фолькванг, поле войск, или поле народа)
                    и палатами
                    Сессрумнир (<b>Sessrúmnir</b>, многоместные или – со многими сиденьями), <Forseti
                    name={"Форсети"}/> – Глитниром (<b>Glitnir</b>,
                    сверкающий), <Vidar name={"Видар"}/> – землями Види (<b>Viði</b>, лесными), <Njord
                    name={"Ньёрд"}/> – Ноатуном (<b>Nóatún</b>, лодочный двор) у моря
                    (и вновь определяющим фактором в сакральной географии становится не физическое положение, а
                    причастность к <Asir name={"асам"}/>). Жилище <Freir name={"Фрейра"}/> – Альвхейм (<b>Álfheimr</b>,
                    обитель альвов), область, которая тоже
                    воспринимается как расположенная где-то рядом с обителями богов.
                </p>
                <p>
                    В Асгарде живут не только <Asir name={"асы"}/>, но и <Vanir name={"ваны"}/> <Njord
                    name={"Ньёрд"}/>, <Freir name={"Фрейр"}/>, <Freya name={"Фрейя"}/>, а также взятые в жены девы
                    Ётунхейма и
                    умершие, достойные войти после смерти в чертоги богов – <Alvar name={"альвы"}/>, <Valkyrir
                    name={"валькирии"}/> и эйнхерии. Подобно Альвису
                    или Хрунгниру, туда могут прийти в качестве гостей (не всегда желанных, надо отметить) <Dvergr
                    name={"дверги"}/> или <Jotnir
                    name={"ётуны"}/>. Обитатели Асгарда собираются на тинг на священном Идавель-поле, стоят в
                    Асгарде и «троны
                    могущества» (мн.ч. <b>rökstólar</b>, престоры правосудия или могущества) двенадцати старших богов,
                    сидя на
                    которых, те принимают важнейшие решения.
                </p>
            </div>
        </main>
    )
}