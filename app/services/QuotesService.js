import { AppState } from "../AppState.js"
import { Quote } from "../models/Quote.js"
import { api } from "./AxiosService.js"


class QuotesService {
  constructor() {
    console.log("QuotesService loaded")
  }

  async getQuote() {
    const res = await api.get("api/quotes")
    console.log("Quote data", res.data)
    let newQuote = new Quote(res.data)
    AppState.dailyQuote = newQuote
    console.log(AppState.dailyQuote, newQuote)
  }
}

export const quotesService = new QuotesService()