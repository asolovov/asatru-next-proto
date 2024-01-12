import styles from "./page.module.css"
import Link from "next/link";

export default function Home() {
    return (
        <main className={"main"}>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Что такое Асатру?
                </h1>
                <h2 className={styles.sbuTitle}>
                    <b>Асатру</b> (др. исл. <b>Ásatrú</b>, от слов <b>Ás</b> «бог» и <b>Trú</b> «вера, доверие») –
                    современное название
                    политеистической
                    религии, основанной на дохристианских традициях и верованиях Скандинавии эпохи викингов.
                </h2>
            </div>
            <div className={styles.mainText}>
                <p>Корни этой религии лежат в представлениях германских племён эпохи Переселения
                    народов и римского и доримского железного веков. Однако основные
                    источники наших знаний о древней вере дошли до наших дней в исландских рукописях
                    XII-XIV веков: в поэмах «<Link target={"_blank"} className={"link"}
                                                   href={"https://norroen.info/src/edda/"}>Старшей
                        Эдды</Link>»,
                    «<Link target={"_blank"} className={"link"} href={"https://norroen.info/src/snorra/"}>Младшей
                        Эдды</Link>»
                    исландца <Link target={"_blank"} className={"link"}
                                   href={"https://norroen.info/src/snorra/litmon/stk.html"}>Снорри
                        Стурлусона</Link>
                    , <Link target={"_blank"} className={"link"} href={"https://norroen.info/src/abc.html"}>исландских
                        сагах</Link> и
                    стихотворениях скальдов. Поэтому в Асатру
                    используется в основном <b>древнескандинавская</b> терминология, также встречается
                    использование <b>древнего готского</b>, <b>староанглийского</b> и <b>прагерманского</b> языков.
                    Помимо современного термина «Асатру» нередко применяются названия наподобии
                    исландского <b>Forn Siðr</b> («Древний обычай») или английского <b>Troth</b> («Верность», «Истина»)
                    и им подобных. Асатру не имеет священных книг. Такие литературные источники, как
                    «<Link target={"_blank"} className={"link"}
                           href={"https://norroen.info/src/edda/"}>Старшая
                        Эдда</Link>» и «<Link target={"_blank"} className={"link"} href={"https://norroen.info/src/snorra/"}>Младшая
                        Эдда</Link>» являются наиболее авторитетными, но не
                    рассматриваются как священные или боговдохновенные.</p>
            </div>
            <h2 className={styles.sbuTitle}>
                История
            </h2>
            <hr/>
            <div className={styles.mainText}>
                <p>Моментом возникновения Асатру как религии (а для её последователей — моментом
                    возрождения древней веры) стал 1972 год, когда
                    исландец <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://en.wikipedia.org/wiki/Sveinbj%C3%B6rn_Beinteinsson"}>Свейнбьерн Бейнтейнссон</Link> основал
                    первую общину Асатру - <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://asatru.is/"}>Ásatrúarfélagið</Link> в
                    Исландии. С 1973 году Асатру в этой стране существует как легальная религия.</p>
                <p>В настоящее время организации Асатру существуют практически во всех странах
                    мира. Асатру не определяет политических воззрений своих последователей, поэтому
                    среди исповедующих его встречается весь спектр политических предпочтений. Однако
                    использование символики германского и скандинавского язычества радикальными
                    правыми группами, обычно вне собственно религиозного контекста, создаёт для
                    последователей скандинавского политеизма дополнительные проблемы и осуждается
                    всеми, кто не придерживается вышеназванных взглядов.</p>
                <p>Асатру, вопреки распространённому мнению, не является синонимом одинизма и
                    вотанизма. Одинизмом сокращённо называется основанная в 1930х годах австралийцем
                    Александром Рудом Миллсом «Англесинская церковь Одина» (Anglecyn Church of Odin),
                    в которой объектом поклонения является фактически один Один, который
                    воспринимается последователями как божество монотеистической религии. Вотанизмом
                    именуют созданное в начале 1990-х годов Дэвидом Лейном националистическое
                    направление германского неоязычества, сосредоточенное на политических заявлениях, а
                    не на религиозных вопросах и не на почитании собственно богов.</p>
            </div>
            <h2 className={styles.sbuTitle}>
                Основные религиозные концепции
            </h2>
            <hr/>
            <div className={styles.mainText}>
                {/*https://norroen.info/wiki/%D0%90%D1%81%D1%8B*/}
                <p>Последователи асатру чтут богов скандинавского пантеона
                    — <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%90%D1%81%D1%8B"}>асов</Link> и <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%92%D0%B0%D0%BD%D1%8B"}>ванов</Link>, богинь судьбы
                    — <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%9D%D0%BE%D1%80%D0%BD%D1%8B"}>норн</Link>,
                    младших божеств
                    — <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%92%D0%B0%D0%BB%D1%8C%D0%BA%D0%B8%D1%80%D0%B8%D0%B8"}>валькирий</Link>, духов
                    местности с общим названием ланветты (landvættr), а также предков по мужской линии
                    — <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%90%D0%BB%D1%8C%D0%B2%D1%8B"}>альвов</Link>,
                    и по женской
                    — <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%94%D0%B8%D1%81%D1%8B"}>дис</Link>.
                    Часть последователей почитает также древних существ,
                    именуемых <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%81%D1%82%D1%83%D0%BD%D1%8B"}>ётунами</Link>. Иногда
                    одновременно почитаются те или иные божества, известные из пантеона древних
                    германцев (Нертус, Нехаления, Танфана и т.д.). </p>
                <p>Основными богами являются глава <Link
                    target={"_blank"}
                    className={"link"}
                    href={"https://norroen.info/wiki/%D0%90%D1%81%D1%8B"}>асов</Link> и бог мудрости, войны и
                    вдохновения <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%9E%D0%B4%D0%B8%D0%BD"}>Один</Link>, его
                    жена <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%A4%D1%80%D0%B8%D0%B3%D0%B3"}>Фригг</Link>, бог громовержец и
                    защитник <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%A2%D0%BE%D1%80"}>Тор</Link> и его
                    жена <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%A1%D0%B8%D0%B2"}>Сив</Link>,
                    бог моря и
                    богатства <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%9D%D1%8C%D1%91%D1%80%D0%B4"}>Ньёрд</Link> и его дети, бог
                    плодородия <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%A4%D1%80%D0%B5%D0%B9%D1%80"}>Фрейр</Link> и богиня
                    любви <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%A4%D1%80%D0%B5%D0%B9%D1%8F"}>Фрейя</Link>, почитаются бог
                    чести и
                    доблести <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%A2%D1%8E%D1%80"}>Тюр</Link>, страж
                    Асгарда <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%A5%D0%B5%D0%B9%D0%BC%D0%B4%D0%B0%D0%BB%D0%BB%D1%8C"}>Хеймдалль</Link>,
                    Форсетти, бог закона и
                    справедливого суда
                    , <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%98%D0%B4%D1%83%D0%BD%D0%BD"}>Идунн</Link>,
                    богиня молодости и обновления, скальд
                    богов <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%91%D1%80%D0%B0%D0%B3%D0%B8"}>Браги</Link>, зимняя
                    охотница <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%A1%D0%BA%D0%B0%D0%B4%D0%B8"}>Скади</Link>, бог-
                    лучник Улль и т.д. </p>
                <p>Поскольку понятие «<Link
                    target={"_blank"}
                    className={"link"}
                    href={"https://norroen.info/wiki/%D0%90%D1%81%D1%8B"}>ас</Link>» (Ás) является не только названием группы богов-<Link
                    target={"_blank"}
                    className={"link"}
                    href={"https://norroen.info/wiki/%D0%90%D1%81%D1%8B"}>асов</Link>, но и
                    используется в источниках в значении «бог», выделение почитания одного или группы сверхъестественных
                    существ (отдельно <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%92%D0%B0%D0%BD%D1%8B"}>ванов</Link> или отдельно <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%81%D1%82%D1%83%D0%BD%D1%8B"}>ётунов</Link> и т.д.) тоже попадает под определение Асатру в широком
                    смысле. Тем не менее, в частных случаях используются иногда термины самоопределения
                    «ванатру», «рёккатру» и т.д. Распространённый в западных странах зонтичный термин
                    heathen
                    или <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://en.wikipedia.org/wiki/Heathenry_(new_religious_movement)"}>Heathenry</Link> в русскоязычном
                        коммьюнити используется редко.</p>
                <p>Большая часть последователей Асатру верит в создание Вселенной в результате взаимодействия огненного и ледяного начал,
                    и в создание известного людям мира из тела
                    Первосущества <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%98%D0%BC%D0%B8%D1%80"}>Имира</Link>, в то, что боги либо
                    создали первых людей, либо придали им человеческий облик и
                    наделили душой и разумом, в то, что судьбу определяют или олицетворяют богини
                    судьбы – <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%9D%D0%BE%D1%80%D0%BD%D1%8B"}>норны</Link>, и их приговор непреложен. Судьба мироздания, в целом,
                    предопределена, и известный нам мир погибнет при Рагнарёке, Последней битве богов с хтоническими
                    чудовищами.
                    В этой битве погибнет глава богов <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%9E%D0%B4%D0%B8%D0%BD"}>Один</Link>, боги <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%A2%D0%BE%D1%80"}>Тор</Link>, <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%A2%D1%8E%D1%80"}>Тюр</Link>, <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%A5%D0%B5%D0%B9%D0%BC%D0%B4%D0%B0%D0%BB%D0%BB%D1%8C"}>Хеймдалль</Link>, <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%A4%D1%80%D0%B5%D0%B9%D1%80"}>Фрейр</Link>. Однако их жертва и борьба
                    спутников <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%9E%D0%B4%D0%B8%D0%BD"}>Одина</Link> — эйнхериев — позволит миру и людям в нём возродиться для нового Золотого Века (с
                    которого некогда началась история богов).</p>
                <p>Вопросы посмертия не являются для большинства последователей Асатру определяющими, но, в целом,
                    считается, что достойно павшие в бою отправляются в чертог <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%9E%D0%B4%D0%B8%D0%BD"}>Одина</Link> — Вальхаллу, верные тому или иному
                    богу могут попасть в его жилище, те
                    же, кто не был удостоен выбора богов, отправляются во владения ётунши Хель, поставленной <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%9E%D0%B4%D0%B8%D0%BD"}>Одином</Link> хранить мир мёртвых. Также в Асатру признаётся возможность возрождения
                    умершего в роду, упомянутая в древних источниках.
                    Спектр теологических объяснений природы богов и мироздания среди последователей
                    Асатру крайне широк, от анимизма и классического политеизма — до неоплатонизма и
                    эклектичных взглядов движения нью-эйдж.</p>
            </div>
            <h2 className={styles.sbuTitle}>
                Обрядность
            </h2>
            <hr/>
            <div className={styles.mainText}>
                <p>Основным обрядом в Асатру является жертвоприношение еды и напитков, называемое
                    блот (blót) и сопровождаемое славлениями богов и/или иных существ-адресатов
                    жертвоприношения. Также распространён совместный ритуальный пир верующих – сумбл
                    (sumbl) или вейцла (veisla), со здравицами во славу богов и предков.
                    Все последователи Асатру чтят праздники Годового круга, хотя набор обязательных
                    событий и время их проведения могут различаться довольно сильно. Одни группы при
                    этом пользуются солнечным (григорианким) календарём, другие лунно-солнечным,
                    соответственно меняется и время проведения обряда.</p>
                <p>Общими для большинства последователей Асатру являются Ветрнэт или Зимние Ночи (в
                    промежутке с конца октября по середину ноября), Йоль (либо в период Зимнего
                    Солнцестояния, либо в течении января), Дистинг (либо в первые дни февраля, либо в
                    марте в районе Весеннего Равноденствия). Отмечаются также Торраблот (Старый Йоль) в
                    январе, Остара (на весеннее Равноденствие или в апреле), Майский день (1е мая),
                    Мидсумар или Середина лета (либо на Летнее Солнцестояние, либо в течении июля),
                    Жатва (в начале августа) и Хаустбод или Осенний Урожай (на Осеннее Равноденствие).
                    Также среди последователей Асатру широко распространено использование рун, для
                    гадания, магии или просто для надписей религиозного содержания.</p>
            </div>
            <h2 className={styles.sbuTitle}>
                Символика
            </h2>
            <hr/>
            <div className={styles.mainText}>
                <p>Основными символами в Асатру является Молот <Link
                    target={"_blank"}
                    className={"link"}
                    href={"https://norroen.info/wiki/%D0%A2%D0%BE%D1%80"}>Тора</Link> (Мьёльнир) в виде подвесок для
                    личного ношения или в виде символического изображения молота для проведения
                    обрядов, а также так называемое «кольцо клятв» — разомкнутый браслет, на котором
                    приносятся клятвы именем богов. Также распространена символика копья, оружия <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://norroen.info/wiki/%D0%9E%D0%B4%D0%B8%D0%BD"}>Одина</Link>,
                    воронов, его спутников, изображения валькнута (три переплетённых треугольника) и
                    отдельных рун, круг с крестом внутри, заимствованный со скандинавских петроглифов
                    бронзового века и т.д. Символ так называемого «Чёрного солнца» (заимствованный
                    изначально с женских украшений германского племени алеманов и известный в науке как
                    «орнаментированный диск», нем. Zierscheibe), а также свастические символы
                    большинством последователей Асатру не используются из-за устоявшейся в
                    общественном сознании связи их с III Рейхом и представителями нацистской идеологии.</p>
            </div>
            <h2 className={styles.sbuTitle}>
                Организация культа
            </h2>
            <hr/>
            <div className={styles.mainText}>
                <p>Среди последователей Асатру широко распространено индивидуальное почитание богов и
                    духов, однако основной и предпочтительной формой организации считается объединение
                    придерживающихся общих религиозных взглядов людей в общину, часто именуемую
                    годордом (goðorð) или трайбом (от английского tribe — «племя»).
                    Исполнять жреческие обязанности в Асатру могут как мужчины, так и женщины. Жреца
                    обычно именуют годи (goði), а жриц гюдья (gyðja). Жрецы проводят обряды Годового
                    круга, а также имянаречения, бракосочетания, похоронные обряды, принимают клятвы и
                    обеты в священном месте и т.д.</p>
                <p>Культовые места в Асатру определяются концепцией «ве» (vé) — священного
                    ритуального пространства. Это может быть природный участок, где организовано капище,
                    курган, священная роща, либо же специальное помещение — храм-хов (hof) или
                    отведённое место в доме, где стоит алтарь-хёрг (hörgr). Важной составляющей
                    организации стационарного священного места на природном участке является концепция
                    его ограды, физической или символической.</p>
                <p>Хотя значительная часть общин Асатру в мире существует вне связи с какими-либо
                    объединениями, есть также разветвлённые организации, объединяющие своих членов в на
                    значительных территориях. Таковы исландская  <Link
                        target={"_blank"}
                        className={"link"}
                        href={"https://asatru.is/"}>Ásatrúarfélagið</Link>, датская Forn Siðr (Asa- og
                    Vanetrosamfundet i Danmark), шведская Nordiska Asa-samfundet, американские Asatru Folk
                    Assambley и The Troth и т.д.</p>
                <p>Первые объединения последователей Асатру  на территории СНГ появились в 2004
                    году. Некоторые из  них официально зарегистрированы как религиозные  группы, однако
                    о создании полноправных религиозных организаций на начало 2024 года ничего не
                    известно.</p>
            </div>
        </main>
    )
}
