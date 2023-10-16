export class Weather {
  constructor(data) {
    this.temperature = data.main.temp
    this.description = data.weather[0].main
    this.icon = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
    this.Ftemp = Math.round((data.main.temp - 273.15) * (9 / 5) + 32)
    this.Ctemp = Math.round(data.main.temp - 273.15)
    this.wantsFtemp = true
    //To access the 0, because it's a number, you have to use []s
  }


  get weatherTemplate() {
    return `
    <div class="d-flex weather-box">
    <div class="p-2">
    ${this.weatherCorF}
    <p>${this.description}</p>
    </div>
    <div class="py-2">
    <img src='${this.icon}' alt='${this.description}'>
    </div>
    </div>
    
    `
  }

  get weatherCorF() {
    return this.wantsFtemp ?
      `<p>${this.Ftemp} <span role="button" onclick="app.WeatherController.flipFandC()">F</span></p>`
      :
      `<p>${this.Ctemp} <span role="button" onclick="app.WeatherController.flipFandC()">C</span></p>`
  }

}


let weatherExample = `{
  "coord": {
      "lon": -116.2035,
      "lat": 43.6135
  },
  "weather": {
      "0": {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
      },
      "icon": "https://openweathermap.org/img/wn/undefined.png"
  },
  "base": "stations",
  "main": {
      "temp": 293.22,
      "feels_like": 292.09,
      "temp_min": 291.38,
      "temp_max": 295.03,
      "pressure": 1016,
      "humidity": 31
  },
  "visibility": 10000,
  "wind": {
      "speed": 6.69,
      "deg": 160,
      "gust": 11.32
  },
  "clouds": {
      "all": 0
  },
  "dt": 1697236500,
  "sys": {
      "type": 2,
      "id": 2043419,
      "country": "US",
      "sunrise": 1697205368,
      "sunset": 1697245541
  },
  "timezone": -21600,
  "id": 5586437,
  "name": "Boise",
  "cod": 200,
  "origin": "https://openweathermap.org"
}`