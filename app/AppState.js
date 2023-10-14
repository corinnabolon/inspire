import { Todo } from "./models/Todo.js"
import { Value } from './models/Value.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { isValidProp } from './utils/IsValidProp.js'
import { loadState } from './utils/Store.js'
import { Image } from './models/Image.js'
import { Quote } from "./models/Quote.js"
import { Weather } from "./models/Weather.js"


class ObservableAppState extends EventEmitter {
  page = ''
  user = null
  /** @type {import('./models/Account.js').Account | null} */
  // @ts-ignore
  account = null
  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])
  socketData = []

  /**
   * @type {Todo[]}
   */
  todos = []

  /** @type {import('./models/Image.js').Image | null} */
  backgroundPic = null


  /** @type {import('./models/Quote.js').Quote | null} */
  dailyQuote = null


  /** @type {import('./models/Weather.js').Weather | null} */
  nowWeather = null

  /** @type boolean */
  wantToShowTodos = false

  // Used to load initial data
  init() {

  }
}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})