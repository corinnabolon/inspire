import { AppState } from "../AppState.js"
import { Todo } from "../models/Todo.js"
import { api } from "./AxiosService.js"

class TodosService {

  async createTodo(todoData) {
    const res = await api.post("api/todos", todoData)
    let newTodo = new Todo(res.data)
    AppState.todos.push(newTodo)
    AppState.emit('todos')
    //Do I need to call a get function after this to get the updated list?
  }
  constructor() {
  }


  async getTodo() {
    const res = await api.get("api/todos")
    const loadedTodos = res.data.map(todoPOJO => new Todo(todoPOJO))
    AppState.todos = loadedTodos
  }

  async removeTodo(todoId) {
    const res = await api.delete(`api/todos/${todoId}`)
    let todoIndex = AppState.todos.findIndex(todo => todo.id == todoId)
    if (todoIndex == -1) {
      return
    }
    AppState.todos.splice(todoIndex, 1)
    AppState.emit("todos")
  }

  async checkTodoComplete(todoId) {
    let todoIndex = AppState.todos.findIndex(todo => todo.id == todoId)
    if (todoIndex == -1) {
      return
    }
    let foundTodo = AppState.todos[todoIndex]
    let changedTodoData = {
      completed: !foundTodo.completed
    }
    // AppState.todos.forEach(todo => {
    //   if (todo.id == todoId) {
    //     todo.completed = true
    //     console.log("Completed todo", todo)
    //   }
    // })   The above code only changed it in my array, not the API, even if I tried putting it
    const res = await api.put(`api/todos/${todoId}`, changedTodoData)
    let updatedTodo = new Todo(res.data)
    AppState.todos.splice(todoIndex, 1, updatedTodo)
    AppState.emit("todos")
  }

  showHideTodos() {
    AppState.wantToShowTodos = !AppState.wantToShowTodos
    // if (AppState.wantToShowTodos) {
    //   AppState.wantToShowTodos = false
    // } else {
    //   AppState.wantToShowTodos = true
    // }
  }



}

export const todosService = new TodosService()