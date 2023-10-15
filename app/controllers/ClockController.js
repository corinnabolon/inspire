import { AppState } from "../AppState.js"
import { Clock } from "../models/Clock.js"
import { clockService } from "../services/ClockService.js"
import { setHTML } from "../utils/Writer.js"

function _drawClock() {
  let newClock = new Clock()
  let formattedTimeString = newClock.formattedTime.toString()
  let formattedTimeStringLower = formattedTimeString.toLowerCase()
  let formattedTimeStringLowerNoSpace = formattedTimeStringLower.replace(/\s/g, "")
  if (AppState.wantsTwentyFourHourClock == false) {
    setHTML("clockSpot", `<p onclick='app.ClockController.switchClockPreference()' role='button'>${formattedTimeStringLowerNoSpace}</p>`)
  } else {
    let twentyFourHourString = formattedTimeStringLowerNoSpace.slice(2)
    let newString = newClock.hours.toString() + twentyFourHourString
    setHTML("clockSpot", `<p onclick='app.ClockController.switchClockPreference()' role='button'>${newString}</p>`)
  }
}

export class ClockController {
  constructor() {
  }


  switchClockPreference() {
    clockService.switchClockPreference()
  }

}

setInterval(_drawClock, 1000)