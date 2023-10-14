import { AppState } from "../AppState.js"
import { Todo } from "../models/Todo.js"
import { api } from "./AxiosService.js"

class TodosService {

  async createTodo(todoData) {
    console.log("todoData", todoData)
    const res = await api.post("api/todos", todoData)
    console.log("New Todo:", res.data)
    let newTodo = new Todo(res.data)
    console.log("New Todo as Todo:", newTodo)
    AppState.todos.push(newTodo)
    AppState.emit('todos')
    //Do I need to call a get function after this to get the updated list?
  }
  constructor() {
    console.log("TodosService instance loaded")
  }


  async getTodo() {
    const res = await api.get("api/todos")
    console.log("Got getTodo data", res.data)
    const loadedTodos = res.data.map(todoPOJO => new Todo(todoPOJO))
    AppState.todos = loadedTodos
    console.log("AppState's todos", AppState.todos)
  }

  async removeTodo(todoId) {
    console.log(`Todo ID ${todoId}`)
    const res = await api.delete(`api/todos/${todoId}`)
    console.log("Deleted todo", res.data)
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
    console.log("Updated completed data", res.data)
    let updatedTodo = new Todo(res.data)
    AppState.todos.splice(todoIndex, 1, updatedTodo)
    AppState.emit("todos")
  }

  showHideTodos() {
    if (AppState.wantToShowTodos) {
      AppState.wantToShowTodos = false
    } else {
      AppState.wantToShowTodos = true
    }
  }
  //Easier way to type this?



}

export const todosService = new TodosService()