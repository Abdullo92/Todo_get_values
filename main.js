let input = document.querySelector('#input')
let btn = document.querySelector('#btn')
let listUl = document.querySelector('#res')

btn.addEventListener('click', getValues)
//Emty Array for input values --> we use the method push()
let todos = [];
function getValues() {
    let getVal = input.value;
    //after click the input will be clear --> = equal '' string
    input.value = '';
    //here we push the values to the --> Array
    todos.push(getVal);

    addToDos()
}
function addToDos() {
    let value = '';
    for (const todo  of todos) {
        value = todo;
    }
    listUl.innerHTML += `
       <li>${value}</li>
    `
}
