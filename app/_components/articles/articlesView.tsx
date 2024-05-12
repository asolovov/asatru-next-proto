'use client'

import {EncyclopediaArticle} from "@/lib/asatruEncyclopediaAPI/models";
import {CgList, CgMenuGridR} from "react-icons/cg";
import Link from "next/link";
import ArticleCard from "@/app/_components/articles/articleCard";
import {useState} from "react";

export default function ArticlesView({articles}: { articles: EncyclopediaArticle[] }) {
    const [isList, setIsList] = useState(localStorage.getItem("isList") === "true");
    return (
        <div style={{marginTop: 20, padding: 10}}>
            <CgMenuGridR className={isList ? "controlItem" : "controlItemActive"} onClick={() => {
                setIsList(false);
                localStorage.setItem("isList", "false")
            }
            }/>
            <CgList className={isList ? "controlItemActive" : "controlItem"} onClick={() => {
                setIsList(true);
                localStorage.setItem("isList", "true")
            }}/>
            {articles &&
                <>{
                    isList ?
                        <ul>
                            {
                                articles.map(a => a &&
                                    <li key={a.id}>
                                        <Link
                                            target={"_blank"}
                                            className={"link linkOwn"}
                                            href={`/encyclopedia/${a.id}`}>{a.title}
                                        </Link>
                                    </li>)
                            }
                        </ul>
                        :
                        <div className={"articlesGrid"}>
                            {
                                articles.map(a => a &&
                                    <div className={"articleCol"} key={a.id}>
                                        <ArticleCard article={a}/>
                                    </div>)
                            }
                        </div>
                }</>
            }
        </div>
    )
}