import { AppState } from "../AppState.js"
import { Quote } from "../models/Quote.js"
import { api } from "./AxiosService.js"


class QuotesService {
  constructor() {
  }

  async getQuote() {
    const res = await api.get("api/quotes")
    let newQuote = new Quote(res.data)
    AppState.dailyQuote = newQuote
  }
}

export const quotesService = new QuotesService()