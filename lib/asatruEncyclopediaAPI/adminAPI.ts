import {encyclopediaApiUrl} from "@/lib/asatruEncyclopediaAPI/config";
import {getInternalErr, getUnauthorisedErr, getUnknownErr} from "@/lib/asatruEncyclopediaAPI/errors";
import {
    AddEncyclopediaArticleRequest, APIErr,
    ArticlesResponse,
    AutResponse,
    EncyclopediaArticle
} from "@/lib/asatruEncyclopediaAPI/models";

export async function deleteArticle(id: string, key: string): Promise<AutResponse> {
    let resp: Response;
    try {
        resp = await fetch(`${encyclopediaApiUrl()}/article?id=${id}`, {
            method: 'DELETE',
            headers: {
                "x-api-key": key,
            }
        });
    } catch (e) {
        return {error: getInternalErr("Ошибка, попробуйте снова", (e as Error).message), ok: false}
    }

    return _handleErr(resp);
}

export async function updateArticle(article: AddEncyclopediaArticleRequest, key: string): Promise<AutResponse> {
    let resp: Response;
    try {
        resp = await fetch(`${encyclopediaApiUrl()}/article`, {
            method: 'PUT',
            body: JSON.stringify(article),
            headers: {
                "x-api-key": key,
                "Content-Type": "application/json",
            }
        });
    } catch (e) {
        return {error: getInternalErr("Ошибка, попробуйте снова", (e as Error).message), ok: false}
    }

    return _handleErr(resp);
}

export async function addArticle(article: AddEncyclopediaArticleRequest, key: string): Promise<AutResponse> {
    if (article.id === "") {
        return {error: {clientMsg: "Слаг не может быть пустым", debug: "article id is blank", err: new Error("invalid data")}, ok: false}
    }

    if (article.title === "") {
        return {error: {clientMsg: "Название не может быть пустым", debug: "article title is blank", err: new Error("invalid data")}, ok: false}
    }

    if (article.body === "") {
        return {error: {clientMsg: "Тело статьи не может быть пустым", debug: "article body is blank", err: new Error("invalid data")}, ok: false}
    }

    let resp: Response;
    try {
        resp = await fetch(`${encyclopediaApiUrl()}/article`, {
            method: 'POST',
            body: JSON.stringify(article),
            headers: {
                "x-api-key": key,
                "Content-Type": "application/json",
            }
        });
    } catch (e) {
        return {error: getInternalErr("Ошибка, попробуйте снова", (e as Error).message), ok: false}
    }

    return _handleErr(resp);
}

export async function fetchAut(key: string): Promise<AutResponse> {
    let resp: Response;
    try {
        resp = await fetch(`${encyclopediaApiUrl()}/admin/aut`, {
            method: 'GET',
            headers: {
                "x-api-key": key
            }
        });
    } catch (e) {
        return {error: getInternalErr("Ошибка, попробуйте снова", (e as Error).message), ok: false}
    }

    return _handleErr(resp);
}

async function _handleErr(resp: Response): Promise<AutResponse> {
    if (!resp.ok) {
        const body = await resp.json() as APIErr;
        switch (resp.status) {
            case 401: {
                return {error: getUnauthorisedErr("Ошибка авторизации", body.message), ok: false}
            }
            case 422 || 400 || 500: {
                return {error: getInternalErr("Ошибка, попробуйте снова", body.message), ok: false};
            }
            default: {
                return {error: getUnknownErr("Неизвестная ошибка", body.message), ok: false};
            }
        }
    }

    return {error: undefined, ok: true};
}