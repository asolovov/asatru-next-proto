import {fetchEncyclopediaArticleByID} from "@/lib/asatruEncyclopediaAPI/articlesAPI";
import {Metadata, ResolvingMetadata} from "next";
import {defaultMetadata} from "@/app/_components/metadata/defaultMetadata";
import Link from "next/link";

export async function generateMetadata(
    {params}:{params: {articleID: string}}
): Promise<Metadata> {
    const {article, error} = await fetchEncyclopediaArticleByID(params.articleID);

    let metadata = {...defaultMetadata};

    const title = metadata.title;
    const keywords = metadata.keywords;

    if (article) {
        metadata.title = `${title} | ${article.metadata.title}`
        metadata.description = article.metadata.description
        metadata.keywords = [...article.metadata.keywords, ...keywords]
        metadata.openGraph = {
            images: `/${article.metadata.og_path}`
        }
    }

    return metadata;
}

export default async function ViewArticle({params}:{params: {articleID: string}}) {
    console.log("rendering server component with ID:", params.articleID)
    const {article, error} = await fetchEncyclopediaArticleByID(params.articleID);

    if (error) {
        console.log(`err get article with id ${params.articleID}:`, error.debug);
    }

    if (article?.toc !== undefined && article.toc.length > 0) {
         article.toc.splice(0, 0,{
             name: `${article.title}: общие сведения`,
             id: ""
         })
        article.title = `${article.title}: общие сведения`
    }

    return (
        <main className={"main"}>
            {article &&
                <div className={"articleContainer"}>
                    {article.toc.length > 0 && <>
                        <h2 className={"point"}>Содержание</h2>
                        {article.toc.map(t =><>
                            <Link className={"link linkToc"} href={`#${t.id}`}>{t.name}</Link><br/></>)}
                    </>}
                    <h1 className={"point"}>{article.title}</h1>
                    <div dangerouslySetInnerHTML={{__html: article.body}}/>
                </div>
            }
        </main>
    )
}