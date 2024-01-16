export function CustomFetch (endPoint,fetchOptions){
    let baseUrl = "https://links-backend-production-3401.up.railway.app"
    if (!endPoint.startsWith("/")) {
        endPoint = "/" + endPoint
    }
    let url = baseUrl+endPoint
    console.log({url})
    return fetch(url,fetchOptions)
}