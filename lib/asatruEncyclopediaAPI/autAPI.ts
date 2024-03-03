import {ENCYCLOPEDIA_API_URL} from "@/lib/asatruEncyclopediaAPI/config";
import {getInternalErr, getUnauthorisedErr, getUnknownErr} from "@/lib/asatruEncyclopediaAPI/errors";
import {AutResponse} from "@/lib/asatruEncyclopediaAPI/models";

export async function fetchAut(key: string): Promise<AutResponse> {
    let resp: Response;
    try {
        resp = await fetch(`${ENCYCLOPEDIA_API_URL}/admin/aut`, {
            method: 'GET',
            headers: {
                "x-api-key": key
            }
        });
    } catch (e) {
        return {error: getInternalErr("Ошибка, попробуйте снова", (e as Error).message), ok: false}
    }


    if (!resp.ok) {
        switch (resp.status) {
            case 401: {
                return {error: getUnauthorisedErr("Авторизация не пройдена", await resp.json()), ok: false}
            }
            case 422 || 400 || 500: {
                return {error: getInternalErr("Ошибка, попробуйте снова", await resp.json()), ok: false};
            }
            default: {
                return {error: getUnknownErr("Неизвестная ошибка", await resp.json()), ok: false};
            }
        }
    }

    return {error: undefined, ok: true};
}