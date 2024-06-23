import type {Metadata} from "next";
import Link from "next/link";
import {fetchEncyclopediaArticleCategories, fetchEncyclopediaArticles} from "@/lib/asatruEncyclopediaAPI/articlesAPI";
import {defaultMetadata} from "@/app/_components/metadata/defaultMetadata";
import ArticleCard from "@/app/_components/articles/articleCard";
import ArticlesView from "@/app/_components/articles/articlesView";
import AllArticles from "@/app/_components/articles/allArticles";

export async function generateMetadata(
    {params}:{params: {articleID: string}}
): Promise<Metadata> {
    let metadata = {...defaultMetadata};
    metadata.title = `${metadata.title} | Энциклопедия`;
    metadata.description = `Энциклопедия asatru.live: статьи тщательно отобраны или написаны нашей командой для объективного описания терминов, часто употребляемых в Асатру`;

    return metadata
}

export default async function Home() {
    const {articles, error} = await fetchEncyclopediaArticles();
    let {categories} = await fetchEncyclopediaArticleCategories();
    categories?.push({name: "Все статьи", slug: "all"});
    if (!categories) {
        categories = [];
    }

    return (
        <main className={"main"}>
            <h1 className={"point"}>Энциклопедия</h1>
            <div className={"mainText"}>
                <p>
                    Статьи энциклопедии были тщательно отобраны или написаны эксклюзивно для портала <b
                    className={"point"}>asatru.live</b> нашей небольшой командой с целью максимально объективно и
                    всесторонне описать те или иные
                    термины, повсеместно встречающиеся среди последователей Асатру. Энциклопедия постоянно поплоняется
                    новыми статьями.
                </p>
                <p>
                    В тексте часто будут встречаться ссылки на портал «<Link
                    target={"_blank"}
                    className={"link linkOut"}
                    href={`http://norroen.info`}>Северная Слава</Link>», на наш взгляд - лучший сборник
                    оригиналов и переводов источников по Северной Традиции.
                </p>
                <AllArticles articles={articles} categories={categories} />
            </div>
        </main>
    )
}