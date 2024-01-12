import Link from "next/link";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Асатру | Asatru | Асгард',
    description: `Асгард (Ásgarðr,ограда асов) мир асов, в более узком смысле слова – селение асов в этом мире. 
    Локализация миров в скандинавской мифологии неоднозначна, но Асгард ассоцииуруется с небом, верхним миром, 
    возвышенностью, горами.`,
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
                <h1>Асгард</h1>
                <p>Асгард (<b>Ásgarðr</b>,ограда асов) мир асов, в более узком смысле слова – селение асов в этом мире.
                    Локализация миров в скандинавской мифологии неоднозначна, но Асгард ассоцииуруется с небом, верхним
                    миром, возвышенностью, горами. Попасть туда можно по небесному пылающему мосту-радуге Бивресту,
                    который охраняет страж Асгарда <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%A5%D0%B5%D0%B9%D0%BC%D0%B4%D0%B0%D0%BB%D0%BB%D1%8C"}>Хеймдалль</Link>.
                    В “<Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/src/edda/grimnis/ru.html"}>Речах Гримнира</Link>”, есть указания,
                    что окружают владения
                    богов небесный поток Тунд (<b>Þund</b>, вздувшийся), вероятно, представляющий из себя потоки
                    воздуха, ветра
                    и бури. Эту преграду должны преодолеть павшие в битве, чтобы достигнуть Вальхаллы.</p>
                <p>Асгард окружен стеной, защищающей его от <Link
                    target={"_blank"}
                    className={"link"}
                    href={"https://norroen.info/wiki/%D0%81%D1%82%D1%83%D0%BD%D1%8B"}>ётунов</Link> и горных великанов.
                    Построил эту стену некий великан
                    со своим волшебным жеребцом Свадильфари по наущению хитроумного <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%9B%D0%BE%D0%BA%D0%B8"}>Локи</Link>, насмешник же сумел
                    избавить
                    богов от непомерной платы за работу, не отдав строителю Солнце, Луну и <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%A4%D1%80%D0%B5%D0%B9%D1%8F"}>Фрейю</Link> (<Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/src/snorra/2ru.html#42"}>“Видение Гюльви”,42</Link>).
                    В Асгарде расположены владения богов, перечисленные в <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/src/edda/grimnis/ru.html"}>“Речах Гримнира”, 4-17</Link>: <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%9E%D0%B4%D0%B8%D0%BD"}>Один</Link> правит
                    Гладсхеймом (<b>Glaðsheimr</b>, жилище радости) с чертогами Валхаллы (<b>Valhöll</b>, палаты
                    павших), а также,
                    будучи предводителем богов - всем Асгардом. <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%A2%D0%BE%D1%80"}>Тор</Link> владеет Трудхеймом
                    (<b>Þrúðheimr</b>, жилище силы) с
                    палатами Бильскирнир (<b>Bilskirrnir</b>), <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%A3%D0%BB%D0%BB%D1%8C"}>Улль</Link> – Идаллиром
                    (<b>Ýdalir</b>, долины тиса), Саге принадлежит
                    Сёкквабекк, (<b>Sökkvabekkr</b>, погружённая скамья), <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%A1%D0%BA%D0%B0%D0%B4%D0%B8"}>Скади</Link> обитает в
                    Трюмхейме (<b>Þrymheimr</b>, жилище шума).
                    Интересно, что Трюмхейм был домом великана Тьяцци до гибели последнего, и, судя по всему, относился
                    к области Ётунхейма. Но примирение его дочери с асами и вхождение её в круг богов сделали и её
                    жилище частью Асгарда, горнего мира. В Брейдаблике (<b>Breiðablik</b>, широкий блеск) стоят
                    палаты <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%91%D0%B0%D0%BB%D1%8C%D0%B4%D1%80"}>Бальдра</Link>, <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%A5%D0%B5%D0%B9%D0%BC%D0%B4%D0%B0%D0%BB%D0%BB%D1%8C"}>Хеймдалль</Link> обитает
                    в Химинбьёрге (<b>Himinbjörg</b>, небесные горы), <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%A4%D1%80%D0%B5%D0%B9%D1%8F"}>Фрейя</Link> владеет Фольквангом (Фолькванг,
                    поле войск, или поле народа) и палатами Сессрумнир (<b>Sessrúmnir</b>, многоместные), Форсети – Глитниром
                    (<b>Glitnir</b>, сверкающий), <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%92%D0%B8%D0%B4%D0%B0%D1%80"}>Видар</Link> – землями Види (<b>Viði</b> , лесными), <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%9D%D1%8C%D1%91%D1%80%D0%B4"}>Ньёрд</Link> владеет Ноатуном (<b>Nóatún</b>,
                    корабельный двор) у моря (и вновь определяющим фактором в сакральной географии становится не
                    физическое положение, а причастность к асам).
                </p>
            </div>
        </main>
    )
}