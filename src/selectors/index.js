import { createSelector } from 'reselect'

const compareMedewerker = (a, b) => a.naam.localeCompare(b.naam)
const filterMedewerker = (f, m) => m.naam.toLowerCase().startsWith(f.toLowerCase())

const getFilterText = (state) => state.medewerkers.searchText
const getMedewerkers = (state) => state.medewerkers.medewerkers

export const getEndPoint = (state) => state.settings.endPoint

export const getFilteredMedewerkers = createSelector([getFilterText, getMedewerkers],
    (filter, medewerkers) => medewerkers.filter(filterMedewerker.bind(this, filter)).sort(compareMedewerker)
)

export const getMedewerkersQuickList = createSelector(
    [getFilteredMedewerkers], (medewerkers) => {
      return medewerkers.map(e => e.naam.charAt(0).toUpperCase()).filter((e, i, a) => a.indexOf(e) === i).sort()
    }
)
