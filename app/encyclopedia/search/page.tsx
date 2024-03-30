'use client'

import {useRouter, useSearchParams} from "next/navigation";
import {ChangeEvent, useCallback, useEffect, useState} from "react";
import {debounce} from "lodash";
import {fetchEncyclopediaArticles, queryEncyclopediaArticles} from "@/lib/asatruEncyclopediaAPI/articlesAPI";
import {EncyclopediaArticle} from "@/lib/asatruEncyclopediaAPI/models";
import Link from "next/link";

export default function Search() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [articles, setArticles] = useState<EncyclopediaArticle[]>([]);

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
        debounce( async (event: ChangeEvent<HTMLInputElement>) => {
            router.push(`/encyclopedia/search?q=${event.target.value}`)
        }, 1000),
        []
    )

    return (
        <main className={"main"}>
            <h1 className={"point"}>Поиск по энциклопедии</h1>
            <input placeholder={"Поисковый запрос..."} onChange={e => handleQuery(e)}/>
            <div style={{marginTop: 20, padding: 10}}>
                <ul>
                {articles && articles.map(a => a &&  <li><Link
                    key={a.id}
                    target={"_blank"}
                    className={"link linkOwn"}
                    href={`/encyclopedia/${a.id}`}>{a.title}
                </Link></li>)}
                </ul>
            </div>
        </main>
    )
}