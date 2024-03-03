export type EncyclopediaArticle = {
    id: string
    title: string
    body: string
    category: string
    published: number
    updated: number
    author: EncyclopediaAuthor
}

export type AddEncyclopediaArticleRequest = {
    id: string
    title: string
    body: string
}

export type ChangeEncyclopediaArticleRequest = {
    body: string
}

export type EncyclopediaAuthor = {
    name: string
}