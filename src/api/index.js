
const fetchJson = (endPoint, api) => fetch(`${endPoint}/api/${api}`).then((response) => response.json())

export const fetchMedewerkers = (endPoint) => fetchJson(endPoint, 'medewerkers')

export const fetchTiles = (endPoint) => fetchJson(endPoint, 'tiles')
