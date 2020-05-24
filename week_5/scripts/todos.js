import { Todo } from './Todo.js'

let todo1 = new Todo('Mow the Lawn', false);
let todo2 = new Todo('Fix the ATV', false);
let todo3 = new Todo('Do the dishes', true);

// debugger;

let todos = [todo1, todo2, todo3];

if (window.localStorage) {
    localStorage.setItem('Todos', JSON.stringify(todos));
    let newlist = JSON.parse(localStorage.getItem('Todos'));
}

console.log(todo1);
console.log(todos);
console.log(newlist);


try {
    //TODO

} catch (error) {
    //ERROR HANDLER

}