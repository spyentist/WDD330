export class Todo {
    constructor(content, completed) {
        this.Id = Date.now(),
        this.Content = content,
        this.Completed = completed
    }
}