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
    // if (AppState.account.wantsTwentyFourHourClock == false) {
    //   AppState.account.wantsTwentyFourHourClock = true
    //   accountService.editAccount(AppState.account)
    // } else {
    //   AppState.account.wantsTwentyFourHourClock = false
    //   accountService.editAccount(AppState.account)
    // }
    //This is what I tried to put it into the account in the api, but it didn't work because that account didn't have a wantsTwentyFourHourClock property and I didn't know whether it's possible to add one... <--save into local storage using the account id
  }



}

export const clockService = new ClockService()