'use client'

import {useRouter, useSearchParams} from "next/navigation";
import {ChangeEvent, useCallback, useEffect, useState} from "react";
import {debounce} from "lodash";
import {
    fetchEncyclopediaArticleCategories,
    fetchEncyclopediaArticles,
    queryEncyclopediaArticles
} from "@/lib/asatruEncyclopediaAPI/articlesAPI";
import {Category, EncyclopediaArticle} from "@/lib/asatruEncyclopediaAPI/models";
import ArticlesView from "@/app/_components/articles/articlesView";


export default function Search() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [articles, setArticles] = useState<EncyclopediaArticle[]>([]);
    const [categories, setCategories] = useState<Category[]>([])
    const [category, setCategory] = useState("all")

    useEffect(() => {
        const query = searchParams.get("q");

        fetchEncyclopediaArticleCategories().then(res => {
            if (res.categories) {
                res.categories?.push({name: "Все статьи", slug: "all"});
                setCategories(res.categories)
            }
        })

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
            <ArticlesView articles={articles} categories={categories} category={category} setCategory={setCategory}/>
        </main>
    )
}