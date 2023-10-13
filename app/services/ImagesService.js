import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"
import { Image } from '../models/Image.js'

class ImagesService {
  constructor() {

  }
  async getRandomImage() {
    let res = await api.get("api/images")
    let newImage = new Image(res.data)
    AppState.backgroundPic = newImage
    AppState.emit("backgroundPic")
  }
}

export const imagesService = new ImagesService()