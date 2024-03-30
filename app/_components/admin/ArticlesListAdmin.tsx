'use client'

import {EncyclopediaArticle} from "@/lib/asatruEncyclopediaAPI/models";
import Link from "next/link";

export default function ArticlesListAdmin({articles}:{articles: EncyclopediaArticle[]}) {
    return (
        <div>
            <ul>
            {articles.map(a => a && <li key={a.id}><Link className={"linkOwn"} href={`/admin/${a.id}`}>{a.title}</Link></li>)}
            </ul>
        </div>
    )
}