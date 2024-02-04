import type {Metadata} from "next";
import {Snorri} from "@/app/_components/encyclopediaLinks/history";
import {Baldr, Loki, Sif, Thor} from "@/app/_components/encyclopediaLinks/gods";
import {Gylfaginning, HakonSaga, Skaldskaparmal, Thrym, Vafthrudnis} from "@/app/_components/encyclopediaLinks/sources";
import {Dvergr, Jotnir} from "@/app/_components/encyclopediaLinks/beings";
import {Asgard} from "@/app/_components/encyclopediaLinks/heims";
import {Blot} from "@/app/_components/encyclopediaLinks/terms";
import {InText, SourceLink} from "@/app/_components/encyclopediaLinks/SourceLink";

export const metadata: Metadata = {
    title: 'Асатру | Asatru | Мьёльнир',
    description: `Мьёльнир или Молот Тора (Mjölnir, древнескандинавск. Mjǫllnir) — священное оружие бога Тора, имеющее вид молота с укороченной рукоятью.`,
    openGraph: {
        images: [{url: "https://asatru.live/og.jpg"}]
    },
    keywords: [
        "Мьёльнир",
        "Молот Тора",
        "Тор",
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
                <h1 className={"point"}>Мьёльнир</h1>
                <p>
                    Мьёльнир или Молот Тора (<b>Mjölnir</b>, древнескандинавск. <b>Mjǫllnir</b>) — священное оружие
                    бога <Thor name={"Тора"}/>,
                    имеющее вид молота с укороченной рукоятью. Мьёльнир всегда бьёт без промаха и с нужной силой,
                    возвращается к своему владельцу после удара, способен уменьшаться и увеличиваться, им в мире богов,
                    как позже ― его символом в мире людей, совершают освящение важнейших обрядов традиционного общества.
                    В наши дни изображение Молота, являются важнейшим символом Асатру. Ношение миниатюрных
                    амулетов-Мьёльниров распространено не только среди последователей северного (германского и
                    скандинавского) политеизма, но именно для последних Мьёльнир является одним из основных знаков
                    религиозной принадлежности, а также защитным амулетом и знаком освящения.
                </p>
                <p>
                    Существует несколько версий происхождения названия Молота Тора. Древнескандинавское
                    слово <b>Mjǫllnir</b> выводят от прото-скандинавского <b>*melluniaR</b>. Одна из версий
                    связывает <b>*melluniaR</b>
                    со старославянским <b>mlunuji</b> и русским «молния» (либо как заимствование из славянского
                    источника,
                    либо объединяя оба слова общим происхождением из более древних языков). В таком случае
                    <b>Mjǫllnir</b> получает значение «создатель молний» как атрибут Громовержца. Другое предположение
                    связывает <b>Mjǫllnir</b> с древнескандинавским <b>mjǫll</b>, означающим «свежевыпавший снег», и
                    современным исландским <b>mjalli</b>, означающим «белый цвет», что делает Мьёлльнир «сверкающим (как
                    молния) оружием». Наконец, еще одно предположение связывает <b>Mjǫllnir</b> с древнескандинавским <b>с</b>,
                    означающим «размалывать», и готским <b>malwjan</b> с тем же значением, в этом
                    случае <b>Mjǫllnir</b> означает «размалыватель», указывая на атрибут Воителя и Защитника (мотив дробления оружием <Thor
                    name={"Тора"}/> каменных глыб встречается в мифе об убийстве Хрунгнира, например).
                </p>
                <p>
                    Предание о том, как <Thor name={"Тор"}></Thor> получил своё священное оружие, рассказано подробно
                    в <Skaldskaparmal name={"Языке поэзии, 43"} chapter={"43"}/>. <Loki
                    name={"Локи"}/>, после того, как срезал волосы <Sif name={"Сив"}/>, был послан исправлять
                    причинённый вред к <Dvergr name={"двергам"}/> (в русском
                    переводе названным «карлами», хотя представление о низком росте <Dvergr name={"двергов"}/> является
                    поздним добавлением
                    к мифологии). <Loki name={"Локи"}/> договорился с сыновьями Ивальди, что те скуют новые волосы, что
                    будут расти как
                    настоящие. Также <Dvergr name={"дверги"}/> создали для богов ещё два сокровища. Получив
                    желаемое, <Loki name={"Локи"}/> не удержался от
                    новой авантюры:
                </p>
                <div className={"quoteContainer"}>
                    <p>
                        И тогда Локи поспорил с карлом по имени Брокк и поставил в заклад свою голову, что брат того
                        карла,
                        Эйтри, не сделает трех таких сокровищ, чтобы сравнялись с этими. И когда они пришли в кузницу,
                        Эйтри
                        положил в горн свиную кожу и велел Брокку поддувать, не останавливаясь, пока он не вынет из
                        горна того,
                        что было туда положено. Но едва он вышел из кузницы, а брат его Брокк взялся за меха, на руку
                        Брокку
                        уселась муха и стала жалить. Но он работал, как прежде, пока кузнец не вынул из горна изделия, и
                        это был
                        вепрь с золотою щетиной. Затем кузнец положил в горн золото и велел поддувать и не прерывать
                        работы,
                        пока он не вернется. Когда он ушел, прилетела муха и, сев на шею Брокку, укусила вдвое больней,
                        чем
                        раньше. Но тот все поддувал, пока кузнец не вынул из горна золотого кольца, что зовется
                        Драупнир. Тогда
                        положил Эйтри в горн железо и велел дуть, говоря, что если поддувание будет прервано, ничего не
                        получится. А муха тут уселась промеж глаз Брокку и ужалила в веко. И когда кровь залила ему
                        глаза, так,
                        что он ничего не видел, он быстро поднес руку к глазам и отогнал муху, а меха меж тем опали. Тут
                        вошел
                        кузнец и сказал, что чуть было не погибло все, что находится в горне. И он вынул из горна молот,
                        отдал
                        все сокровища своему брату Брокку и велел ему идти с ними в Асгард, чтобы взыскать заклад.
                    </p>
                    <p>
                        И когда карлик и Локи принесли сокровища, асы сели на свои судейские троны, и все должно было
                        решиться
                        по приговору Одина, Тора и Фрейра. Тогда Локи отдал Одину копье Гунгнир, Тору — волосы для Сив,
                        а Фрейру
                        — корабль Скидбладнир.
                    </p>
                    <p>
                        (…)
                    </p>
                    <p>
                        Тогда Брокк достал свои сокровища. Он отдал Одину кольцо, говоря, что каждую девятую ночь капают
                        из
                        него по восьми колец такого же веса. Фрейру отдал он вепря, говоря, что тот может бежать по
                        водам и
                        воздуху, ночью и днем, быстрее любого коня, и ночью, и в самой Стране Тьмы будет ему светло: так
                        светится у него щетина. А потом он отдал Тору молот, говоря, что им можно бить, с какою он
                        захочет силой
                        и по любой цели, и никогда не откажет молот, и куда бы он его ни бросил, он никогда не
                        промахнется, и
                        как бы далеко ни залетел молот, он всегда вернется Тору в руку. И если Тор захочет, молот
                        сделается так
                        мал, что можно носить его за пазухой. И лишь один у него недостаток: коротковата рукоять.*
                        *Приговор богов гласил, что молот — лучшее из всех сокровищ и надежная защита от инеистых
                        великанов. И
                        они рассудили, что карлик выиграл заклад.
                    </p>
                </div>
                <p>
                    В <Gylfaginning name={"Видении Гюльви, 23"} chapter={"23"}/> <Snorri name={"Снорри"}/> добавляет:
                </p>
                <div className={"quoteContainer"}>
                    <p>
                        Есть у него [Тора] и ещё три сокровища. Одно из них — молот Мьёлльнир. Инеистые великаны и
                        горные
                        исполины чуют молот, лишь только он занесён. И не диво: он проломил череп многим их предкам и
                        родичам.
                    </p>
                </div>
                <p>
                    Молот Тора может нести не только смерть врагам <Asgard name={"Асгарда"}/> и Мидгарда, но и
                    возрождение жизни. <Gylfaginning name={"Видение Гюльви, 44"} chapter={"44"}/> рассказывает:
                </p>
                <div className={"quoteContainer"}>
                    <p>
                        Тор заночевал там, а спозаранку встал, оделся и, подняв молот свой, Мьёлльнир, освятил им шкуры.
                        Встали
                        козлы, но один хромал на заднюю ногу. Не укрылось это от Тора, и он сказал, что, верно, хозяин
                        или
                        домашние его не были осторожны с козлиными костями: ведомо ему, что сломана бедренная кость.
                    </p>
                </div>
                <p>
                    Возможно, именно поэтому <Thor name={"Тор"}/> освящает Мьёльниром погребальный костёр
                    <Baldr name={"Бальдра"}/>, как рассказывает <Gylfaginning name={"Видение Гюльви, 49"}
                                                                              chapter={"49"}/>:
                </p>
                <div className={"quoteContainer"}>
                    <p>
                        Потом тело Бальдра перенесли на ладью, и лишь увидела это жена его Нанна, дочь Непа, у неё
                        разорвалось
                        от горя сердце, и она умерла. Её положили на костёр и зажгли его. Тор встал рядом и освятил
                        костёр
                        молотом Мьёлльнир.
                    </p>
                </div>
                <p>
                    Так же освящали последний путь своих близких и люди, верные богам: на камне DR 110 из Вирринге
                    (Дания) выбита надпись рунами:
                </p>
                <div className={"quoteContainer"}>
                    <div className={"row"}>
                        <div className={"col2"}>
                            <p>
                                Тор, освяти эту могилу
                            </p>
                        </div>
                        <p className={"col2"}>
                            Þor vigi þæssi kumbl
                        </p>
                    </div>
                </div>
                <p>
                    Известны также
                    мемориальные камни, на которых Молот Тора изображён, что, вероятно, заменяло надпись. Таков,
                    например, рунический камень Sö 111 из Стенквисты (Швеция). В более древние времена гривны с
                    амулетами-молоточками клали поверх кремационных урн.
                </p>
                <p>
                    Но освящали Молотом не только уходящих в Иной мир. В <Thrym name={"Песне о Трюме"}
                                                                                chapter={""}/> есть описание обряда
                    бракосочетания:
                </p>
                <div className={"quoteContainer"}>
                    <div className={"row"}>
                        <div className={"col2"}>
                            <p>
                                Сказал тогда Трюм,<br/>
                                ётунов конунг:<br/>
                                «Скорей принесите<br/>
                                молот сюда!<br/>
                                На колени невесте<br/>
                                Мьёлльнир кладите!<br/>
                                Пусть Вар десница<br/>
                                союз осенит!»
                            </p>
                        </div>
                        <p className={"col2"}>
                            Þá kvað þat Þrymr,<br/>
                            þursa dróttinn:<br/>
                            «Berið inn hamar<br/>
                            brúði at vígja,<br/>
                            lekkið Mjöllni<br/>
                            í meyjar kné,<br/>
                            vígið okkr saman<br/>
                            Várar hendi.»
                        </p>
                    </div>
                </div>
                <p>
                    А в <HakonSaga name={"Саге о Хаконе Добром"} chapter={""}/> есть слова:
                </p>
                <div className={"quoteContainer"}>
                    <p>
                        Конунг поступает так, как
                        все, кто верует в свою мощь и
                        силу и посвящают свой кубок Тору. Он сделал знак молота над рогом, прежде чем испить
                    </p>
                </div>
                <p>
                    Современные последователи древней веры освящают знаком или символом Мьёльнира свои важнейшие
                    события: <Blot name={"жертвоприношения-блоты"}/>, пиры-сумблы, браки, проводимые по древнему обряду,
                    похороны тем,
                    кого провожают в последний путь, с изображением Молота ставят надгробные памятники единоверцам.
                    Служит Мьёльнир и амулетом для защиты от всякого зла, и знаком преданности <Thor name={"Тору"}/> или
                    просто великим
                    богам Асатру.
                </p>
                <p>
                    В древности <Thor name={"Тор"}/> считался защитником не только от <Jotnir name={"ётунов"}/>, но и от
                    болезней (или, вероятно, болезни
                    считались происками злых сил, которые <Thor name={"Тор"}/> истребляет). На амулете XI века из Сёдра
                    Квиннебю (<b>Södra
                    Kvinneby</b>) в Эланде, Швеция (Öl SAS1989; 43) , XI века, есть руническая надпись с упоминанием
                    Тора-Защитника и его оружия:
                </p>
                <div className={"quoteContainer"}>
                    <div className={"row"}>
                        <div className={"col2"}>
                            <p>
                                Здесь я режу тебе защиту, Бови, с/... ... ... для тебя ясно. И пусть
                                молния отгонит все зло от Бови. Пусть Тор\р защитит его этим Молотом, пришедшим из моря.
                                Избегни
                                зла! Ты ничего не получил от Бови. Боги под ним и над ним
                            </p>
                        </div>
                        <div className={"col2"}>
                            <p>
                                Hér rísta/rista ek þér bjǫrg, Bófi, með/... 〈fultihu〉〈þis〉 þér er víss. En
                                brá haldi illu frá Bófa. Þórr gæti hans með þeim hamri sem ór hafi kom. Flý frá
                                illvætti! Fær ekki
                                af Bófa. Guð eru undir honum ok yfir honum
                            </p>
                            <p>
                                Нормализованный текст
                            </p>
                        </div>
                    </div>
                </div>
                <p>
                    После Рагнарёка, в котором, как предсказано, <Thor name={"Тор"}/> погибнет, Молот, которым бог
                    сражается и убивает
                    чудовищного змея Ёрмунганда, не исчезнет: он перейдёт по наследству к его сыновьям. Как сказано
                    в <Vafthrudnis name={"Речах Вавтруднира, 51"} chapter={"51"}/>:
                </p>
                <div className={"quoteContainer"}>
                    <p>
                        Моди и Магни Мьёлльнир возьмут. когда Вингнис погибнет.
                    </p>
                </div>
                <hr className={"point"}/>
                <h2 className={"point"}>История символа</h2>
                <p>
                    Для многих индоевропейских культур характерно представление о неком оружии, принадлежащем
                    богу-Громовержцу, воплощении его мощи и власти: таковы важдра Индры, секира Перуна и Перкунаса,
                    выкованные Киклопами молнии Зевса, связка из трёх молний Тархунта у хеттов. Среди петроглифов
                    бронзового
                    и раннего железного веков в Бохуслене (Швеция) есть и изображение мужчины на колеснице с чем-то
                    вроде
                    молота (или топора?), часто отождествляемое с изображением Громовержца.
                </p>
                <p>
                    Однако классический символ Молота среди германских или скандинавских находок не зафиксирован, по
                    крайней
                    мере, до периода 700-800 гг. До этого широко распространённым среди германских племён амулетом была
                    так
                    называемая «Палица Геркулеса». Это амулет в виде подвески или даже серёг, изображавших палицу героя,
                    был
                    изначально популярен среди женщин Римской империи. Предполагается связь его с защитой и культом
                    плодородия и растительности (иногда палицы изображали обвитыми листьями). В период контактов Рима с
                    германскими племенами Геркулес был отождествлён с германским громовержцем Донаром
                    путём <b>interpretatio Romana</b> (римской интерпретации). Германские племена Нижнего Рейна (батавы,
                    кананефаты, убии,
                    кугерны,
                    тунгрии, марсаки), ставшие подданными Империи, приняли это отождествление и стали во II-III веках
                    чтить
                    Донара под именем Геркулеса Магусана (см. Л. Чернышов. «Культ Геркулеса Магусана как фактор
                    формирования
                    батавской идентичности»<InText num={"1"}/>. Рудольф Зимек (<b>Rudolf Simek</b>) полагал, что
                    имя <b>Magusanus</b> было изначально эпитетом
                    протогерманского
                    Тунраза (<b>Þunraz</b>). Имя часто выводят из протогерманского <b>*Magus-naz</b> ― Сильный,
                    Могущественный
                    (есть,
                    впрочем, версия и для происхождения слова из протокельтского). Вероятно, именно в результате такого
                    отождествления среди женщин германских племён стал популярен и амулет, получивший
                    название <b>Donarkeule</b> (нем. «Палица Донара»).
                </p>
                <p>
                    В V-VII веках амулеты <b>Donarkeulen</b> очень быстро распространились по всей германской Европе в
                    новой
                    форме, больше похожей на узкую пирамидку, чем на собственно палицу. Германские
                    поздние <b>Donarskeulen</b> делали из оленьего рога, реже из кости, дерева, бронзы или драгоценных металлов.
                    Они были украшены
                    резными простыми линиями или круглыми «глазками» (возможно, как остаточный след от сучков на римском
                    прототипе). Их находили только в могилах женщин и девочек, в области таза, но иногда и у височной
                    области погребённых. У <b>Donarskeulen</b>, найденных в области таза, хорошо видны небольшие
                    железные или
                    бронзовые кольца для подвешивания на поясе. Второй тип находок, видимо, связан с использованием
                    амулета
                    в виде серёг или височного кольца на головном уборе. Исчезновение Палиц Донара из погребений после
                    VII
                    века связывают с распространением и укреплением среди южных германцев христианства.
                </p>
                <p>
                    И примерно в тот же период на севере появляются первые амулеты, интерпретируемые как изображения
                    Молота Тора. Безусловно, одно не является прямым следствием другого, но говорит о некой традиции
                    (или
                    потребности) носить амулеты, связанные с Громовержцем. При этом наблюдается существенное отличие:
                    если
                    Палицы Геркулеса были амулетом преимущественно женским, Мьёльниры встречаются в женских погребениях
                    лишь
                    не на много чаще, чем в мужских (для сравнения: обереги и амулеты иной формы, таких как миниатюрные
                    щиты, мечи или ложечки, встречаются всегда в погребениях женщин. Именно женщины, как более слабые и
                    несущие миссию материнства, нуждались в дополнительной защите).
                </p>
                <p>
                    То, что найденные молотообразные или стилизованные «якореобразные» предметы изображают именно Молот
                    Тора, подтверждает находка из Кёбелева на острове Лолланд в Дании, руническая надпись на найденном
                    там
                    амулете гласит <b>hmar x is</b>, т.е подвеска подписана именно как Молот
                    (древнескандинавск. <b>hamar</b>),
                    с
                    нередким для рунических надписей упрощением. Эта находка фактически положила конец спорам про
                    интерпретацию подобных предметов.
                </p>
                <p>
                    Формы Молотов в эпоху викингов варьировались от самых простых до изощрённо украшенных, материалом
                    могли
                    служить металлы, как драгоценные, так и обычные, янтарь, даже камень (в долине Тьорсардалур («Долина
                    Бычьей Реки») в Южной Исландии был найден амулет из песчаника). Изображение Молота встречается
                    процарапанными на арабских дирхемах, высеченными на рунических камнях, в виде стилизованного Молота
                    оформлен конец бороды фигурки <Thor name={"Тора"}/> из Эйрарланда (Исландия).
                </p>
                <p>
                    Предполагается, что на популярность амулетов-Мьёльнеров, особенно в позднее время, повлияло
                    столкновение
                    с христианством и, как следствие, желание отделить себя от последователей другой веры, в том числе и
                    визуально. Тем не менее, как пишет Ритгерд в «Язык знаков. Артефакты-Мьёльниры как способ
                    невербальной
                    коммуникации: социологическая перспектива».<InText num={"2"}/>:
                </p>
                <div className={"quoteContainer"}>
                    <p>
                        Молоты появились на несколько столетий раньше, чем церковь завоевала Скандинавию. Христианство должно
                        было быть известно в Северной Европе в период первых предполагаемых Молотов (VI век) благодаря контактам
                        с континентальной Европой, но христианская религия, вероятно, не считалась угрозой, которая оправдывала
                        бы мнение о кризисе языческой идентичности. Культ Тора также вряд ли был однородным на такой большой
                        географической территории, но, по-видимому, среди скандинавских народов существовало некоторое общее
                        понимание Мьёлльнира как наиболее могущественного атрибута Тора, о чем свидетельствует распределение
                        находок Молотов
                    </p>
                </div>
                <SourceLink
                    link={"https://cyberleninka.ru/article/n/kult-gerkulesa-magusana-kak-faktor-formirovaniya-batavskoy-identichnosti/viewer"}
                    text={"Л. Чернышов. «Культ Геркулеса Магусана как фактор формирования батавской идентичности»"}
                    num={"1"}/>
                <SourceLink link={"https://vk.com/@-211988884-ritgerd-o-tore-i-melnire-ch2"}
                            text={"Ritgerð. Sign Language* *Mjöllnir artefacts as nonverbal communication: a sociological perspective, 2019"}
                            num={"2"}/>
            </div>
        </main>
    )
}