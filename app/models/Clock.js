export class Clock {
  constructor() {
    this.date = new Date()
    //since you're not passing anything in on cretion and just want it to make a new date at that time, this is fine
  }


  get clockTemplate() {
    return `
    <p>${this.date}</p>    
    `
  }


}