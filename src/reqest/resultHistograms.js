import $apiV1 from "../api/index";

export const getHistograms = async ({ inn, tonality,
  limit, startDate, endDate, maxFullness, inBusinessNews, onlyMainRole, 
  onlyWithRiskFactors, excludeTechNews, excludeAnnouncements, excludeDigests}) => {

  return $apiV1.post('/objectsearch/histograms', {
    "issueDateInterval": {
      startDate,
      endDate
    },
    "searchContext": {
      "targetSearchEntitiesContext": {
        "targetSearchEntities": [
          {
            "type": "company",
            "sparkId": null,
            "entityId": null,
            inn,
            maxFullness,
            inBusinessNews
          }
        ],
        onlyMainRole,
        tonality,
        onlyWithRiskFactors,
        "riskFactors": {
          "and": [],
          "or": [],
          "not": []
        },
        "themes": {
          "and": [],
          "or": [],
          "not": []
        }
      },
      "themesFilter": {
        "and": [],
        "or": [],
        "not": []
      }
    },
    "searchArea": {
      "includedSources": [],
      "excludedSources": [],
      "includedSourceGroups": [],
      "excludedSourceGroups": []
    },
    "attributeFilters": {
      excludeTechNews,
      excludeAnnouncements,
      excludeDigests
    },
    "similarMode": "duplicates",
    limit,
    "sortType": "sourceInfluence",
    "sortDirectionType": "desc",
    "intervalType": "month",
    "histogramTypes": [
      "totalDocuments",
      "riskFactors"
    ]
  })
}