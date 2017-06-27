
const fetchJson = (endPoint, api) => fetch(`${endPoint}/api/${api}`).then((response) => response.json())

export const fetchMedewerkers = (endPoint) => fetchJson(endPoint, 'medewerkers')

export const fetchTiles = (endPoint) => fetchJson(endPoint, 'tiles')

export const storeToken = (endPoint, tokenData) =>
  fetch(`${endPoint}/gcm/keys`, {
    method: 'post',
    headers: { 'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(tokenData)
  })
