import { AppState } from "../AppState.js"
import { Quote } from "../models/Quote.js"
import { quotesService } from "../services/QuotesService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


function _drawQuote() {
  setHTML("quoteSpot", AppState.dailyQuote.quoteTemplate)
}


export class QuotesController {
  constructor() {
    console.log("QuotesController loaded")
    this.getQuote()

    AppState.on("dailyQuote", _drawQuote)
  }

  async getQuote() {
    try {
      await quotesService.getQuote()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

}