import {Err} from "@/lib/asatruEncyclopediaAPI/errors";

export type APIErr = {
    message: string
    code: number
}

export type APIArticlesResponse = {
    articles: EncyclopediaArticle[]
}

export type APICategoriesResponse = {
    categories: Category[]
}

export type EncyclopediaArticle = {
    id: string
    title: string
    body: string
    category: string
    published: number
    updated: number
    author: EncyclopediaAuthor
    metadata: EncyclopediaMetadata
    toc: EncyclopediaTOCPoint[]
}

export type Category = {
    slug: string
    name: string
}

export type EncyclopediaTOCPoint = {
    name: string
    id: string
}

export type EncyclopediaMetadata = {
    title: string
    description: string
    og_path: string
    keywords: string[]
}

export type EncyclopediaAuthor = {
    name: string
}

export type AddEncyclopediaArticleRequest = {
    id: string
    title: string
    body: string
    category: string
    metadata: EncyclopediaMetadata
}

export type ChangeEncyclopediaArticleRequest = {
    body: string
}

export type ArticleCategoriesResponse = {
    categories: Category[] | undefined
    error: Err | undefined
}

export type ArticlesResponse = {
    articles: EncyclopediaArticle[]
    error: Err | undefined
}

export type ArticleResponse = {
    article: EncyclopediaArticle | undefined
    error: Err | undefined
}

export type AutResponse = {
    ok: boolean
    error: Err | undefined
}
