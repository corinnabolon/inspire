import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { api } from "./AxiosService.js"

class WeatherService {
  constructor() {

  }

  async getWeather() {
    const res = await api.get("api/weather")
    let weather = new Weather(res.data)
    AppState.nowWeather = weather
  }

  flipFandC() {
    // if (AppState.nowWeather.wantsFtemp) {
    //   AppState.nowWeather.wantsFtemp = false
    // } else {
    //   AppState.nowWeather.wantsFtemp = true
    // }
    AppState.nowWeather.wantsFtemp = !AppState.nowWeather.wantsFtemp
    AppState.emit("nowWeather")
  }
  //What is more a concise way of doing the above?

}

export const weatherService = new WeatherService()