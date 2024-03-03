import {ENCYCLOPEDIA_API_URL} from "@/lib/asatruEncyclopediaAPI/config";
import {
    Err,
    getInternalErr,
    getNotFoundErr,
    getUnauthorisedErr,
    getUnknownErr
} from "@/lib/asatruEncyclopediaAPI/errors";
import {AddEncyclopediaArticleRequest, EncyclopediaArticle} from "@/lib/asatruEncyclopediaAPI/models";

export type EncyclopediaArticlesResponse = {
    articles: EncyclopediaArticle[] | undefined
    error: Err | undefined
}

export type EncyclopediaArticleResponse = {
    article: EncyclopediaArticle | undefined
    error: Err | undefined
}

export async function addEncyclopediaArticle(art: AddEncyclopediaArticleRequest, key: string): Promise<Err | undefined> {
    const resp = await fetch(`${ENCYCLOPEDIA_API_URL}/article`, {
        method: 'POST',
        headers: {
            "x-api-key": key,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(art)
    });

    if (!resp.ok) {
        switch (resp.status) {
            case 422 || 400 || 500: {
                return getInternalErr("Ошибка, попробуйте снова", await resp.json());
            }
            case 401: {
                return getUnauthorisedErr("Доступ запрещен", await resp.json());
            }
            default: {
                return getUnknownErr("Неизвестная ошибка", await resp.json());
            }
        }
    }

    return undefined;
}

export async function fetchEncyclopediaArticles(): Promise<EncyclopediaArticlesResponse> {
    console.log("FETCHING")
    const resp = await fetch(`${ENCYCLOPEDIA_API_URL}/articles`, {
        method: 'GET',
    });

    if (!resp.ok) {
        switch (resp.status) {
            case 422 || 400 || 500: {
                return {error: getInternalErr("Ошибка, попробуйте снова", await resp.json()), articles: undefined};
            }
            default: {
                return {error: getUnknownErr("Неизвестная ошибка", await resp.json()), articles: undefined};
            }
        }
    }

    const {articles} = await resp.json();
    return {error: undefined, articles};
}

export async function fetchEncyclopediaArticle(id: string): Promise<EncyclopediaArticleResponse> {
    const resp = await fetch(`${ENCYCLOPEDIA_API_URL}/article?id=${id}`, {
        method: 'GET',
    });

    if (!resp.ok) {
        switch (resp.status) {
            case 404: {
                return {error: getNotFoundErr("Статья на найдена", await resp.json()), article: undefined};
            }
            case 422 || 400 || 500: {
                return {error: getInternalErr("Ошибка, попробуйте снова", await resp.json()), article: undefined};
            }
            default: {
                return {error: getUnknownErr("Неизвестная ошибка", await resp.json()), article: undefined};
            }
        }
    }

    const article = await resp.json();
    return {error: undefined, article};
}