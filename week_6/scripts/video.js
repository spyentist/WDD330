import { Todo } from './Todo.js'

window.addEventListener('load', loadList());

// debugger;
document.getElementById('add_item').addEventListener('click', function() {
    let new_item = document.getElementById('input1').value;
        if(new_item) {
            let list_item = new Todo(new_item)
            
            addToDo(list_item)
            document.getElementById('input1').value = '';
        } else {
            alert("Please enter a value into the Add a To-do Box.")
        }
    }
)

function detectDeleteAndCheck() {

document.querySelectorAll('.delete').forEach(item => {
    item.addEventListener('click', event => { {
        console.log(item.parentElement.id);
        parent = item.parentElement.id;
        removeToDo(parent);
    }
})
});

document.querySelectorAll('.check').forEach(item => {
    item.addEventListener('click', event => { {
        console.log(item.parentElement.parentElement);
        parent = item.parentElement.parentElement;
        parent.classList.toggle('completed');
        console.log('clicked');

        console.log(parent.id);
    
        let list = getLS();
    
        console.log(list.findIndex(x => x.Id == parent.id));
        // console.log(list);
        // console.log(item.parentElement.parentElement.id);
        list[list.findIndex(x => x.Id == parent.id)].Completed = true;
        pushToLS(list);
    }
})
});

}

// DONE
function addToDo(todo){

    let todoList = getLS();

    let done, css;
    // console.log(todo.Id)
    // done = true;
    console.log(done);

    todoList.push(todo);

    console.log(todoList);

    todo.Completed ? done = " checked" : done = "";
    todo.Completed ? css = 'class="completed"' : css  ="";

const item = `<tr id="${todo.Id}" ${css}>
                <td><input class="check" type='checkbox'${done}></td>
                <td>${todo.Content}</td>
                <td class="delete">&cross;</td>
            </tr>`;

document.querySelector('tbody').innerHTML += item;

pushToLS(todoList);

detectDeleteAndCheck();

}

// DONE
function loadList() {
    let list = getLS();

    let done;

    list.forEach(element => {

        if(element) {

        element.Completed ? done = " checked" : done = "";

        const item = `<tr id="${element.Id}">
                <td><input class="check" type='checkbox'${done}></td>
                <td>${element.Content}</td>
                <td class="delete">&cross;</td>
            </tr>`;
        document.querySelector('tbody').innerHTML += item;

        }
    });

    detectDeleteAndCheck();
}


function removeToDo(element) {
// debugger;
    let list = getLS();

    // console.log(list.Id.find(element));

    console.log(list.findIndex(x => x.Id == element));

    // delete list[list.findIndex(x => x.Id == element)];

    list.splice(list.findIndex(x => x.Id == element), 1);



    pushToLS(list);

    detectDeleteAndCheck();

}

// DONE 
function pushToLS(list) {
    localStorage.setItem("TODO", JSON.stringify(list));
    console.log('Local storage updated')
}

// DONE
function getLS() {
    let data = localStorage.getItem("TODO");
    let todoList
    if (data) {
        todoList = JSON.parse(data);
    } else {
        todoList = [];
    }
    console.log(todoList);
    return todoList;

    
}