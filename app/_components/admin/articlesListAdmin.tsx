import {EncyclopediaArticle} from "@/lib/asatruEncyclopediaAPI/models";
import Link from "next/link";

export default function ArticlesListAdmin({articles}: {articles: EncyclopediaArticle[]}) {
    return (
        <ul style={{marginBottom: 20}}>
            {articles.map(a => <>
            {a && <Article a={a}/>}</>
            )}
        </ul>
    )
}

function Article({a}: {a: EncyclopediaArticle}) {
    const published = new Date(a.published * 1000);
    let updated = "-";
    if (a.updated > 0) {
        const dt = new Date(a.updated * 1000);
        updated = dt.toLocaleString();
    }

    return (
        <li>
            <Link className={"linkOwn"} key={a.id} href={`/admin/${a.id}`}>
                {a.title}
            </Link> | Pub: {published.toLocaleString()} | Upd: {updated} | Aut: {a.author.name}
        </li>
    )
}