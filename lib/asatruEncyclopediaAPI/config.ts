
export function encyclopediaApiUrl() {
    return process.env.ENCYCLOPEDIA_API_URL ? process.env.ENCYCLOPEDIA_API_URL : "http://localhost/api/v1/encyclopedia";
}