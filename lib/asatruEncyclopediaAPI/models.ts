import {Err} from "@/lib/asatruEncyclopediaAPI/errors";

export type EncyclopediaArticle = {
    id: string
    title: string
    body: string
    category: string
    published: number
    updated: number
    author: EncyclopediaAuthor
}

export type EncyclopediaAuthor = {
    name: string
}

export type AddEncyclopediaArticleRequest = {
    id: string
    title: string
    body: string
}

export type ChangeEncyclopediaArticleRequest = {
    body: string
}

export type AutResponse = {
    ok: boolean
    error: Err | undefined
}
