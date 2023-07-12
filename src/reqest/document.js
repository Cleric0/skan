import $apiV1 from "../api";

export async function getDocuments({
 inn,
 tonality,
 limit,
 startDate,
 endDate,
 maxFullness,
 inBusinessNews,
 onlyMainRole,
 onlyWithRiskFactors,
 excludeTechNews,
 excludeAnnouncements,
 excludeDigests
}) {
  const idsResponse = await $apiV1.post('objectsearch', {
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
  const documentsResponse = await $apiV1.post('documents', { ids: idsResponse.data.items})
  console.log(idsResponse.data.items)
  return documentsResponse.data
}