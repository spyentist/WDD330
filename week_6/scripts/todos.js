import { Todo } from './Todo.js'

let todo1 = new Todo('Mow the Lawn', false);
let todo2 = new Todo('Fix the ATV', false);
let todo3 = new Todo('Do the dishes', true);

// debugger;

let todoList = [];

todoList.push(todo1);
todoList.push(todo2);
todoList.push(todo3);

if (window.localStorage) {
    localStorage.setItem('todoList', JSON.stringify(todoList));
    let newlist = JSON.parse(localStorage.getItem('todoList'));
};


todoList.forEach(
    row => {
        document.querySelector('tbody').innerHTML += 
            `<tr>
            <td> 
            <td> ${row.Completed}</td>
            <td> ${row.Content}</td>
            </tr>`;
        console.table(row);
        console.log(row)
    }
);



//console.log(todo1);
console.log(todoList[1590881395992].content);
// console.log(newlist);
