import { AppState } from "../AppState.js"
import { weatherService } from "../services/WeatherService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawWeather() {
  let weather = AppState.nowWeather
  setHTML("weatherSpot", weather.weatherTemplate)
}

export class WeatherController {
  constructor() {
    console.log("Weather Controller loaded")
    this.getWeather()

    AppState.on("nowWeather", _drawWeather)
  }

  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }
  flipFandC() {
    weatherService.flipFandC()
  }
}