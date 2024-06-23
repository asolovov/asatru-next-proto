'use client'

import Link from "next/link";
import ArticlesView from "@/app/_components/articles/articlesView";
import {useState} from "react";
import {Category, EncyclopediaArticle} from "@/lib/asatruEncyclopediaAPI/models";

export default function AllArticles({articles, categories}: { articles: EncyclopediaArticle[], categories: Category[] }) {
    const [category, setCategory] = useState("all")

    return (<div>
        <Link href={"/encyclopedia/search"} className={"link linkOwn"}>Поиск по энциклопедии</Link>
        {categories && <ArticlesView articles={articles} categories={categories} category={category} setCategory={setCategory}/>}
    </div>)
}