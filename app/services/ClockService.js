import { AppState } from "../AppState.js"
import { Clock } from "../models/Clock.js"


class ClockService {
  constructor() {

  }

  setGreeting() {
    let newClock = new Clock()
    if (newClock.hours >= 17 || newClock.hours <= 3) {
      AppState.timeOfDay = `evening`
    } else if (newClock.hours >= 4 && newClock.hours <= 12) {
      AppState.timeOfDay = `morning`
    } else {
      AppState.timeOfDay = `afternoon`
    }
  }

  switchClockPreference() {
    if (AppState.wantsTwentyFourHourClock == false) {
      AppState.wantsTwentyFourHourClock = true
    } else {
      AppState.wantsTwentyFourHourClock = false
    }
  }



}

export const clockService = new ClockService()