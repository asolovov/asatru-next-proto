import {EncyclopediaArticle} from "@/lib/asatruEncyclopediaAPI/models";
import Link from "next/link";

export default function EncyclopediaArticles({articles}: {articles: EncyclopediaArticle[]}) {
    return (
        <ul>
            {articles.map(a =>
                <li key={a.id}>
                    <Link
                        target={"_blank"}
                        className={"link linkOwn"}
                        href={`/encyclopedia/${a.id}`}>{a.title}</Link>
                </li>
            )}
        </ul>
    )
}