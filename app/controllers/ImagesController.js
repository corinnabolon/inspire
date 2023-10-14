import { AppState } from "../AppState.js"
import { api } from "../services/AxiosService.js"
import { imagesService } from "../services/ImagesService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML, setText } from "../utils/Writer.js"

function _drawBackgroundImage() {
  let BgPic = AppState.backgroundPic
  if (BgPic == null) {
    return
  }
  let BgPicUrl = BgPic.imgUrl
  document.body.style.backgroundImage = `url(${BgPicUrl})`
}

function _drawPhotographerName() {
  setText("photographerName", `Image by ${AppState.backgroundPic.author}`)
}

export class ImagesController {
  constructor() {
    this.getRandomImage()

    AppState.on('backgroundPic', _drawBackgroundImage)
    AppState.on('backgroundPic', _drawPhotographerName)
  }

  async getRandomImage() {
    try {
      await imagesService.getRandomImage()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }
}