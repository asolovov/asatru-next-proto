import {APIArticlesResponse, ArticleResponse, ArticlesResponse, AutResponse} from "@/lib/asatruEncyclopediaAPI/models";
import {encyclopediaApiUrl} from "@/lib/asatruEncyclopediaAPI/config";
import {getInternalErr, getUnauthorisedErr, getUnknownErr} from "@/lib/asatruEncyclopediaAPI/errors";

export async function fetchEncyclopediaArticleByID(id: string): Promise<ArticleResponse> {
    let resp: Response;
    try {
        resp = await fetch(`${encyclopediaApiUrl()}/article?id=${id}`, {
            method: 'GET',
            cache: "no-cache",
        });
    } catch (e) {
        return {error: getInternalErr("Ошибка, попробуйте снова", (e as Error).message), article: undefined}
    }

    if (!resp.ok) {
        switch (resp.status) {
            case 422 || 400 || 500: {
                return {error: getInternalErr("Ошибка, попробуйте снова", await resp.json()), article: undefined};
            }
            default: {
                return {error: getUnknownErr("Неизвестная ошибка", await resp.json()), article: undefined};
            }
        }
    }

    return {error: undefined, article: await resp.json()};
}

export async function queryEncyclopediaArticles(query: string): Promise<ArticlesResponse> {
    let resp: Response;
    try {
        resp = await fetch(`${encyclopediaApiUrl()}/articles?query=${query}`, {
            method: 'GET',
            cache: "no-cache",
        });
    } catch (e) {
        return {error: getInternalErr("Ошибка, попробуйте снова", (e as Error).message), articles: []}
    }

    if (!resp.ok) {
        switch (resp.status) {
            case 422 || 400 || 500: {
                return {error: getInternalErr("Ошибка, попробуйте снова", await resp.json()), articles: []};
            }
            default: {
                return {error: getUnknownErr("Неизвестная ошибка", await resp.json()), articles: []};
            }
        }
    }

    const artResp = await resp.json() as APIArticlesResponse
    return {error: undefined, articles: artResp.articles};
}

export async function fetchEncyclopediaArticles(): Promise<ArticlesResponse> {
    let resp: Response;
    try {
        resp = await fetch(`${encyclopediaApiUrl()}/articles`, {
            method: 'GET',
            cache: "no-cache",
        });
    } catch (e) {
        return {error: getInternalErr("Ошибка, попробуйте снова", (e as Error).message), articles: []}
    }

    if (!resp.ok) {
        switch (resp.status) {
            case 422 || 400 || 500: {
                return {error: getInternalErr("Ошибка, попробуйте снова", await resp.json()), articles: []};
            }
            default: {
                return {error: getUnknownErr("Неизвестная ошибка", await resp.json()), articles: []};
            }
        }
    }

    const artResp = await resp.json() as APIArticlesResponse
    return {error: undefined, articles: artResp.articles};
}