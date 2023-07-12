import {makeAutoObservable} from "mobx";
import {createContext} from "react";

const defaultUser = {
  eventFiltersInfo: {
    usedCompanyCount: 34,
    companyLimit: 1000,
  }
}

export class Store {
  isAuthorized = false
  user = defaultUser
  data = {}
  userInputData = {}
  histograms = []

  constructor() {
    makeAutoObservable(this)
  }

  setHistograms(data) {
    const histograms = []
    const [totalDocuments, riskFactors] = data 
    for (let i = 0; i < totalDocuments.lenth; i ++) {
      histograms.push({
        date: totalDocuments[i].date,
        totalDocuments: totalDocuments[i].value,
        riskFactors: riskFactors[i].value,
      })
    }
    this.histograms = histograms
  }

  setUserInputData(data) {
    this.userInputData = data
  }

  setData(data) {
    this.data = data
  }

  setIsAuthorized(isAuthorized) {
    this.isAuthorized = isAuthorized
  }

  setUser(user) {
    this.user = user
  }

  clearUser() {
    this.user = defaultUser
  }
}

export const store = new Store()

export const Context = createContext(store)