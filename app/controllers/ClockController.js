import { Clock } from "../models/Clock.js"
import { setHTML } from "../utils/Writer.js"

function _drawClock() {
  let newClock = new Clock()
  let formattedTime = newClock.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  let formattedTimeString = formattedTime.toString()
  let formattedTimeStringLower = formattedTimeString.toLowerCase()
  let formattedTimeStringLowerNoSpace = formattedTimeStringLower.replace(/\s/g, "")
  setHTML("clockSpot", formattedTimeStringLowerNoSpace)
}

export class ClockController {
  constructor() {
    console.log("Clock Controller loaded")
    // _drawClock()
  }

}

setInterval(_drawClock, 1000)