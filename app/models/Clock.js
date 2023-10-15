export class Clock {
  constructor() {
    this.date = new Date()
    this.hours = this.date.getHours()
    // this.twenty = this.date.getHours() % 12 || 12;
    this.formattedTime = this.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    this.wantsTwentyFourClock = false
    //since you're not passing anything in on creation and just want it to make a new date at that time, this is fine
  }



}