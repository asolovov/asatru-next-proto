
export function encyclopediaApiUrl() {
    return process.env.NEXT_PUBLIC_ENCYCLOPEDIA_API_URL ? process.env.NEXT_PUBLIC_ENCYCLOPEDIA_API_URL : "http://localhost/api/v1/encyclopedia";
}