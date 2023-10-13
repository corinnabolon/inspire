import { AppState } from "../AppState.js"
import { todosService } from "../services/TodosService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawTodos() {
  let content = ``
  const todos = AppState.todos
  todos.forEach(todo => content += todo.todoListTemplate)
  setHTML("todo-list", content)
}

export class TodosController {
  constructor() {
    console.log("TodosController loaded")

    AppState.on('account', this.getTodo)
    AppState.on('todos', _drawTodos)
    // AppState.on('account', _drawTodos)
  }

  async createTodo(event) {
    try {
      event.preventDefault()
      console.log("Testing the button")
      let form = event.target
      let todoData = getFormData(form)
      await todosService.createTodo(todoData)
      console.log("Todo created!")
      Pop.success("New to-do created!")
      form.reset()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  async getTodo() {
    try {
      await todosService.getTodo()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  async removeTodo(todoId) {
    try {
      let wantsToDelete = await Pop.confirm("Are you sure you want to delete this to-do?")
      if (!wantsToDelete) {
        return
      }
      await todosService.removeTodo(todoId)
      Pop.success("To-do deleted.")
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  async checkTodoComplete(todoId) {
    try {
      await todosService.checkTodoComplete(todoId)
      let foundTodo = AppState.todos.find(todo => todo.id == todoId)
      if (foundTodo.completed == true) {
        Pop.success("To-do completed!")
      } else {
        Pop.success("To-do marked uncompleted.")
      }
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }




}