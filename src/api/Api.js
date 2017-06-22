
export const fetchMedewerkers = (endPoint) =>
  fetch(`${endPoint}/api/medewerkers`).then((response) => response.json())

export default {fetchMedewerkers}
