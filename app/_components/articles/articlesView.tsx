'use client'

import {Category, EncyclopediaArticle} from "@/lib/asatruEncyclopediaAPI/models";
import {CgList, CgMenuGridR} from "react-icons/cg";
import Link from "next/link";
import ArticleCard from "@/app/_components/articles/articleCard";
import {useEffect, useState} from "react";

export default function ArticlesView(
    {articles, categories, category, setCategory}: { articles: EncyclopediaArticle[], categories: Category[], category: string, setCategory: Function }
) {
    const [isList, setIsList] = useState(false);

    useEffect(() => {
        setIsList(window.localStorage.getItem("isList") === "true")
    }, [isList]);

    return (
        <div >
            <div style={{display: "flex", alignItems: "center", marginTop: 10}}>
                <CgMenuGridR className={isList ? "controlItem" : "controlItemActive"} onClick={() => {
                    setIsList(false);
                    localStorage.setItem("isList", "false")
                }
                }/>
                <CgList className={isList ? "controlItemActive" : "controlItem"} onClick={() => {
                    setIsList(true);
                    localStorage.setItem("isList", "true")
                }}/>
                {categories.length > 0 && <select defaultValue={"all"} onChange={e => {
                    const target = e.target.value;
                    setCategory(target);
                }}>
                    {categories.map(c => <option key={c.slug} value={c.slug}>{c.name}</option>)}
                </select>}
            </div>
            {articles &&
                <>{
                    isList ?
                        <ul>
                            {
                                articles.map(a => a && (a.category === category || category === "all") &&
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
                                articles.map(a => a && (a.category === category || category === "all") &&
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