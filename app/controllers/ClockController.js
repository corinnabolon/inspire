import { AppState } from "../AppState.js"
import { Clock } from "../models/Clock.js"
import { clockService } from "../services/ClockService.js"
import { setHTML } from "../utils/Writer.js"

function _drawClock() {
  let newClock = new Clock()
  let formattedTimeLower = newClock.formattedTime.toLowerCase()
  let formattedTimeNoLetters = formattedTimeLower.replace('am' || 'pm', '')
  let formattedTimeLowerNoSpace = formattedTimeLower.replace(/\s/g, "")
  if (AppState.wantsTwentyFourHourClock == false) {
    console.log("wants 12 hour clock")
    if (formattedTimeLowerNoSpace[0] == "0") {
      formattedTimeLowerNoSpace = formattedTimeLowerNoSpace.slice(1)
    }
    setHTML("clockSpot", `<p onclick='app.ClockController.switchClockPreference()' role='button'>${formattedTimeLowerNoSpace}</p>`)
  } else {
    console.log("wants 24 hour clock")
    let twentyFourHourSecondString = formattedTimeNoLetters.slice(2)
    if (newClock.hours.toString()[0] == "1" && newClock.hours.toString().length >= 2) {
      let newString = newClock.hours.toString() + twentyFourHourSecondString
      setHTML("clockSpot", `<p onclick='app.ClockController.switchClockPreference()' role='button'>${newString}</p>`)
    } else {
      let twentyFourHourFirstString = "0" + newClock.hours.toString()
      let newString = twentyFourHourFirstString + twentyFourHourSecondString
      setHTML("clockSpot", `<p onclick='app.ClockController.switchClockPreference()' role='button'>${newString}</p>`)
    }
  }
}

export class ClockController {
  constructor() {
    // AppState.on("account", promiseInterval)
  }


  switchClockPreference() {
    clockService.switchClockPreference()
  }
}

// function promiseInterval() {
//   setInterval(_drawClock, 1000)
// }
//this is from when I was trying to make account preferences link to the clock display, so it wouldn't get loaded until after the account was loaded

setInterval(_drawClock, 1000)