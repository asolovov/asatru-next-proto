import "./articles.css"
import {EncyclopediaArticle} from "@/lib/asatruEncyclopediaAPI/models";
import Link from "next/link";

export default function ArticleCard({article}: { article: EncyclopediaArticle }) {
    return (
        <Link href={`/encyclopedia/${article.id}`} target={"_blank"}>
            <div className={"articleCard"}>
                {/*<div className={"marker"}>Энциклопедия</div>*/}
                <h3 className={"articleTitle"}>{article.title}</h3>
                <p className={"articlePreviewText"}>
                    {article.body.slice(0, 200).replace(/<[^>]*>?/gm, '') + '...'}
                </p>
            </div>
        </Link>
    )
}