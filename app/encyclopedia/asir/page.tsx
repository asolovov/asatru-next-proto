import type {Metadata} from "next";
import {
    Baldr, Bor,
    Bragi, Buri, Forseti, Freir, Freya, Frigg, Fulla,
    Heimdallr, Hel, Hermod,
    Hodr, Honir, Idunn, Loki,
    Njord,
    Odin, Sif, Sol, Surtr,
    Thor,
    Tur,
    Ullr,
    Vali,
    Vidar
} from "@/app/_components/encyclopediaLinks/gods";
import {AskEndEmbla, Audumla, Dvergr, Jotnir, Nornir, Vanir} from "@/app/_components/encyclopediaLinks/beings";
import {Edda, Grimnirs, Gylfaginning, Inglinge, SnorriEdda, Voluspa} from "@/app/_components/encyclopediaLinks/sources";
import {Snorri} from "@/app/_components/encyclopediaLinks/history";
import {Asgard, Iggdrasil, Midgard} from "@/app/_components/encyclopediaLinks/heims";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Асатру | Asatru | Асы',
    description: `Асы (мн.ч. æsir, ед. ч. áss) – одна из двух основных групп высших божеств, в скандинавском язычестве, 
    иногда — обозначение богов вообще.`,
    openGraph: {
        images: [{url: "https://asatru.live/og.jpg"}]
    },
    keywords: [
        "Асы",
        "Ас",
        "Боги Асы",
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
                <h1>Асы, Ас</h1>
                <p>
                    Асы (мн.ч. <b>æsir</b>, ед. ч. <b>áss</b>) – одна из двух основных групп высших божеств в
                    скандинавском пантеоне, иногда – обозначение богов вообще. Другим божественным родом
                    являются <Vanir name={"ваны"}/>, с которыми некогда асы вели войну, но заключили мир, обменявшись
                    заложниками. Принято считать, что <Vanir name={"ваны"}/> отвечают, в первую очередь, за мир,
                    плодородие, изобилие, урожай и продолжение рода,
                    асов же скорее связывают с социальным порядком, общественными структурами и законами, с путями войны
                    и подвига. Тем не менее, обобщение это достаточно условно, многие асы покровительствуют
                    производительным силам земли и природы, процветанию и достатку, предводитель асов <Odin
                    name={"Один"}/> владеет магией ванов под названием сейд (<b>seiðr</b>) и т.д. К тому же, не следует
                    забывать, что божественные силы в принципе не сводимы ни к представлениям людей о них, ни, тем
                    более, к представлениям людей о неких их «функциях».
                </p>
                <p>
                    Слово áss произошло от праскандинавского <b>*ᚨᛊᚢᛉ</b> (<b>*asuʀ</b>), которое возводят к
                    прагерманскому
                    <b>*ansuz</b> (бог), произошедшего, в свою очередь, от праиндоевропейского <b>*h₂énsus</b> , и,
                    ранее, от
                    праиндоевропейского <b>*h₂ens-</b> (рождать, порождать). Это слово родственно
                    древнеанглийскому <b>ōs</b>,
                    древнесаксонскому <b>ās</b>, древневерхненемецкому <b>ans-</b>, латинскому <b>Ansis</b> (мн.ч.,
                    заимствовано из готского)<a className={"link"} href={"#1"}>¹</a>.
                    Этимология имени асов подтверждает свидетельства мифа о том, что богов изначально видели
                    порождающими жизнь, нашими реальными или символическими предками. Ведь именно боги создали наш мир,
                    и сотворили первых людей <AskEndEmbla name={"Аска и Емблу"}/>, или, вернее сказать, придали им вид и
                    качества человека.
                </p>
                <p>
                    Происхождение рода асов в мифах тесно связано с космогонией и племенем древних <Jotnir
                    name={"ётунов"}/>.
                    Согласно <Gylfaginning name={"Видение Гюльви"} chapter={""}/> <Bor name={"Бор"}/> (<b>Borr</b>,
                    родитель) возникший благодаря божественной корове <Audumla name={"Аудумле"}/> из камня, имел
                    сына <Buri name={"Бури"}/> (<b>Búri</b>, рождённый), который взял в жены Бестлу (<b>Bestla</b>),
                    дочь мудрого <Jotnir name={"ётуна"}/> Бельторна (<b>Bölþorn</b>, злой шип), и у них родились
                    сыновья <Odin name={"Один"}/>, Вили и
                    Ве, боги-асы, устроители
                    мироздания в его известной нам форме.
                </p>
                <p>
                    <Gylfaginning name={"Видение Гюльви, 6"} chapter={""}/> рассказывает про это так:
                </p>
                <div className={"quoteContainer"}>
                    <p>Высокий говорит: «Она [Аудумла] лизала соленые камни, покрытые инеем, и к исходу первого дня,
                        когда она лизала те камни, в камне выросли человечьи волосы, на второй день — голова, а на
                        третий день возник весь человек. Его прозывают Бури. Он был хорош собою, высок и могуч. У него
                        родился сын по имени Бор. Он взял в жены Бестлу, дочь Бёльторна великана, и она родила ему троих
                        сыновей: одного звали Один, другого Вили, а третьего Ве. И верю я, что Один и его братья —
                        правители на небе и на земле. Думаем мы, что именно так его зовут. Это имя величайшего и
                        славнейшего из всех ведомых нам мужей, и вы можете тоже называть его так»</p>
                </div>
                <p>
                    Дальнейшее повествование <Snorri
                    name={"Снорри Стурлусона"}/> демонстрирует, что для вхождения в круг асов имела значение не столько
                    родословная, сколько принадлежность к миру божественного порядка, к силам хранящим, в противовес
                    области хтонического, сфере  <Jotnir name={"ётунов"}/> и чудовищ-разрушителей.
                </p>
                <p>
                    В <SnorriEdda name={"Младшей Эдде"} chapter={""}/> Снорри упоминает о двенадцати асах. Судя по
                    всему, это связано с желание свести
                    перечень божеств к священному для германцев числу, на самом деле асов известно больше. К асам
                    в <Gylfaginning name={"Видение Гюльви"} chapter={""}/> причислены: <Odin
                    name={"Один"}/>, <Thor
                    name={"Тор"}/>, <Njord name={"Ньёрд"}/>, <Tur name={"Тюр"}/>, <Bragi name={"Браги"}/>, <Heimdallr
                    name={"Хеймдалль"}/>, <Hodr name={"Хёд"}/>, <Vidar name={"Видар"}/>, <Vali
                    name={"Али (или Вали)"}/>, <Ullr
                    name={"Улль"}/>, <Forseti name={"Форсети"}/>, <Loki name={"Локи"}/>. Так же асами названы <Baldr
                    name={"Бальдр"}/> и
                    <Freir name={"Фрейр"}/>.
                    Аналогична ситуация с богинями. <Gylfaginning name={"Видение Гюльви, 35"} chapter={"35"}/> приводит
                    список
                    из четырнадцати асиний (так в оригинале, в русском переводе они обобщенно
                    названы богинями): <Frigg name={"Фригг"}/>, Сага, Эйр, Гевьён, <Fulla name={"Фулла"}/>, <Freya
                    name={"Фрейя"}/>,
                    Сьёвн, Ловн, Вар, Вёр, Сюн, Хлин, Снотра,
                    Гна. Причислены к асиньям и солнечная <Sol name={"Соль"}/>, и лунная Биль. Однако, поскольку в
                    списке асов
                    упоминаются ваны <Njord name={"Ньёрд"}/>, <Freir name={"Фрейр"}/> и <Freya name={"Фрейя"}/>, а также
                    происходящий из рода <Jotnir name={"ётунов"}/> <Loki name={"Локи"}/>, очевидно, что для
                    автора само слово “ас” в первую очередь означало именно божество.
                </p>
                <p>
                    Кроме упомянутых выше асов, нам известны Труд, Моди и Магнии, дочь и сыновья <Thor
                    name={"Тора"}/>, <Sif
                    name={"Сив"}/> – супруга
                    Тора, <Hermod
                    name={"Хермод"}/>, сын <Odin name={"Одина"}/>, <Honir name={"Хёнир"}/>, который в <Edda
                    name={"Старшей Эдде"} chapter={""}/> неизменно присутствует в странствующей
                    троице асов <Odin name={"Один"}/> – <Loki name={"Локи"}/> – <Honir name={"Хёнир"}/>, причём
                    последние двое иногда отождествляются с братьями <Odin name={"Одина"}/>, Вили
                    и Ве. Предводительствует асами <Odin name={"Один"}/>, супруг <Frigg name={"Фригг"}/> и отец многих
                    богов: <Baldr name={"Бальдра"}/>, <Thor
                    name={"Тора"}/>, <Vidar name={"Видара"}/>, Вали,
                    по некоторым версиям – <Tur name={"Тюра"}/>.
                </p>
                <p>
                    Асы живут в <Asgard name={"Асгарде"}/> (<b>Ásgarðr</b>, ограда асов), под которым, в зависимости от
                    контекста, понимают либо
                    мир богов либо, более узко, их поселение. <Asgard name={"Асгард"}/> отделён от других частей
                    мироздания крепкой
                    оградой, построенной великаном по наущению <Loki name={"Локи"}/>. Однако в пределах <Asgard
                    name={"Асгардa"}/> боги так же имеют
                    собственные владения и чертоги перечисленные в <Grimnirs name={"Речах Гримнира"} chapter={""}/>:
                    Гладсхейм с чертогами Валхаллы <Odin name={"Одина"}/>, Трудвангар с
                    палатами
                    Бильскирнир <Thor
                    name={"Тора"}/>, Фолькванг и Сессрумнир <Freya name={"Фрейи"}/> и т.д. Обитатели <Asgard
                    name={"Асгарда"}/> сходятся на пиры, собираются
                    на священном поле тинга, вершат правосудие у Ясеня <Iggdrasil name={"Иггдрасиль"}/> рядом со
                    священным источником Урд. Так же, согласано <Voluspa name={"Прорицанию вёльвы"}
                                                                         chapter={""}/> и <Inglinge
                    name={"Cаге об Инглингах"} chapter={""}/>, в <Asgard name={"Асгардe"}/> для величайших
                    из божеств издревле воздвигнуты двенадцать тронов,
                    именуемых «престолы могущества» (ед.ч. <b>rökstóll</b>). Восседая на них, боги
                    совещаются и принимают важнейшие решения. Таким образом обитатели <Asgard name={"Асгарда"}/> некогда
                    упорядочили
                    мироздание, начав исчислять время, дав названия ночи и дню, «вечеру, утру и дня середине», создали
                    первые кузнечные орудия, стали ковать металл, строить капища и т.д. Асы же создали племя <Dvergr
                    name={"двергов"}/>,
                    искуснейших кузнецов, трое путешествовавших по <Midgard name={"Мидгарду"}/> асов дали жизнь, силы и
                    дух первым людям.
                </p>
                <p>
                    Асы, как и <Vanir name={"ваны"}/>, и <Jotnir name={"ётуны"}/>, не являются по своей природе вечными,
                    они рождаются, они могут, подобно
                    сыну <Odin name={"Одина"}/>, светлому <Baldr name={"Бальдру"}/> или его брату, слепому <Hodr
                    name={"Хёду"}/>, погибнуть для <Asgard name={"Асгарда"}/> и сойти в мир <Hel name={"Хель"}/>.
                    Молодость им возвращает богиня обновления <Idunn name={"Идунн"}/> с помощью волшебных яблок,
                    без которых боги стареют.
                </p>
                <p>
                    Судьбы богов, как и судьбы нашего мира, предопределены <Nornir name={"норнами"}/>. Известно, что
                    старшие из асов, <Odin
                    name={"Один"}/>, <Thor
                    name={"Тор"}/>, <Tur name={"Тюр"}/>,  <Freir name={"Фрейр"}/>, <Heimdallr
                    name={"Хеймдалль"}/>, погибнут в Рагнарёке (<b>Ragnarök</b>,
                    участь богов), останавливая воинство <Surtr name={"Сурта"}/> и <Loki name={"Локи"}/>, выступивших
                    погубить наш мир. <Midgard name={"Мидгард"}/> будет разрушен,
                    но боги ценой своей жизни остановят врага, после чего и <Midgard name={"Мидгард"}/>, и род людской
                    сумеют возродиться
                    в  обновлённом мире. Тогда же из <Hel name={"Хель"}/> в мир живых вернутся братья <Baldr
                    name={"Бальдр"}/> и <Hodr
                    name={"Хёд"}/>.
                </p>
                <p>
                    В прологе к <SnorriEdda name={"Младшей Эдде"} chapter={""}/> и в <Inglinge
                    name={"Cаге об Инглингах"} chapter={""}/>, т.е. в источниках достаточно поздних,
                    рассказывается об азиатском происхождении асов. Некоторые учёные (в частности, шведский археолог Б.
                    Салин) пытались найти в этих сведениях историческую основу.. Однако реальная связь между
                    неким племенем «асов» или хотя бы германских народов с азиатским континентом так и осталась не
                    подтвержденной. На сегодняшний день происхождение индоевропейцев, далёких предков современных германцев,
                    славян и кельтов, из условной Азии – междуречья Днепра и Волги (археологические культуры Средний
                    Стог, самарская и ямная) является одной из основных гипотез, но, несмотря на это, евгемерические
                    версии расположения земной «страны Асов» к востоку от Дона (Танаиса, Танаквисля, Ванаквисля)
                    или появления <Odin
                    name={"Один"}/> как потомка правителей Трои в трудах <Snorri name={"Снорри"}/>, вероятнее всего, были
                    выстроены на созвучии названий и вызваны желанием включить свой мир в общеевропейскую Ойкумену,
                    во многом опиравшуюся на античность. Также возможно, в этом сыграли роль отголоски воспоминаний
                    о миграциях готов и Великом переселении народов. Включение с древности слова «ас» в собственные
                    имена у различных германских племён и упоминание византийским историком Иорданом культа асов
                    («ансов», <b>ansuz</b> – божественных предков) у готов свидетельствует об исконном и общегерманском
                    характере веры в асов.
                </p>
                ¹ <a id={"1"} className={"link"} href={"https://en.wiktionary.org/wiki/áss"} target={"_blank"}>Этимология
                слова áss</a>
            </div>
        </main>
    )
}