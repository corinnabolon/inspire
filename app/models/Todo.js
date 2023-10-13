export class Todo {
  constructor(data) {
    this.description = data.description
    this.id = data.id
    this.completed = data.completed || false
    this.creatorId = data.creatorId
  }


  get todoListTemplate() {
    return `
    <div class="d-flex align-items-center justify-content-between">
    <div class="d-flex"><i role="button" onclick="app.TodosController.checkTodoComplete('${this.id}')" class="mdi ${this.completeOrNot}"></i><p class="ms-2">${this.description}</p></div>
    <div><i role="button" onclick="app.TodosController.removeTodo('${this.id}')" class="mdi mdi-delete"></i></div>
    </div>
    `
  }

  get completeOrNot() {
    if (!this.completed) {
      return `
      mdi-checkbox-blank-outline
      `
    }
    return ` mdi-checkbox-marked-outline`
  }

}