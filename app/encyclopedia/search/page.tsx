'use client'

import {useRouter, useSearchParams} from "next/navigation";
import {ChangeEvent, useCallback, useEffect, useState} from "react";
import {debounce} from "lodash";
import {fetchEncyclopediaArticles, queryEncyclopediaArticles} from "@/lib/asatruEncyclopediaAPI/articlesAPI";
import {EncyclopediaArticle} from "@/lib/asatruEncyclopediaAPI/models";
import Link from "next/link";
import ArticleCard from "@/app/_components/articles/articleCard";
import {CgMenuGridR, CgList} from "react-icons/cg";
import {tree} from "next/dist/build/templates/app-page";
import ArticlesView from "@/app/_components/articles/articlesView";


export default function Search() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [articles, setArticles] = useState<EncyclopediaArticle[]>([]);
    const [isList, setIsList] = useState(false);

    useEffect(() => {
        const query = searchParams.get("q");

        if (query) {
            queryEncyclopediaArticles(query).then(res => {
                if (res.articles) {
                    setArticles(res.articles);
                }
            })
        } else {
            fetchEncyclopediaArticles().then(res => {
                if (res.articles) {
                    setArticles(res.articles);
                }
            })
        }
    }, [searchParams, setArticles])

    const handleQuery = useCallback(
        debounce(async (event: ChangeEvent<HTMLInputElement>) => {
            router.push(`/encyclopedia/search?q=${event.target.value}`)
        }, 1000),
        []
    )

    return (
        <main className={"main"}>
            <h1 className={"point"}>Поиск по энциклопедии</h1>
            <input placeholder={"Поисковый запрос..."} onChange={e => handleQuery(e)}/>
            <ArticlesView articles={articles}/>
        </main>
    )
}