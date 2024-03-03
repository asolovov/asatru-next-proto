import {ENCYCLOPEDIA_API_URL} from "@/lib/asatruEncyclopediaAPI/config";
import {Err, getInternalErr, getUnauthorisedErr, getUnknownErr} from "@/lib/asatruEncyclopediaAPI/errors";

export type AutResponse = {
    ok: boolean
    error: Err | undefined
}

export async function fetchAut(key: string): Promise<AutResponse> {
    const resp = await fetch(`${ENCYCLOPEDIA_API_URL}/admin/aut`, {
        method: 'GET',
        headers: {
            "x-api-key": key
        }
    });

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