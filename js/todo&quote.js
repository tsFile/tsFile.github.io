const quotes = [
    {
        quote: "The road to success and the road to failure are almost exactly the same.",
        author: "Colin R. Davis",
    },
    {
        quote: "It is better to fail in originality than to succeed in imitation.",
        author: "Herman Melville",
    },
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill",
    },
    {
        quote: "All progress takes place outside the comfort zone.",
        author: "Michael John Bobak",
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau",
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Success seems to be connected with action. Successful people keep moving.",
        author: "Conrad Hilton",
    },
    {
        quote: "In order to succeed, we must first believe that we can.",
        author: "Nikos Kazantzakis",
    },
    {
        quote: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon",
    },
];
const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const subMenu = document.querySelector(".todolist");

const TODOS_KEY = "toDos";
let toDos = [];

function setQuote() {
    const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerText = randomQuotes.quote;
    author.innerText = randomQuotes.author;
}

function setSubMenu(newToDoObj) {
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const a = document.createElement("a");
    a.innerText = newToDoObj.text;
    subMenu.appendChild(li);
    li.appendChild(a);
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const target = event.target.parentElement.parentElement;
    const subMenuLi = document.getElementById(target.id);
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(target.id));
    saveToDos();
    target.remove();
    subMenuLi.remove();
    // 삭제시마다 명언 change
    setQuote();
}

function paintToDo(newToDoObj) {
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newToDoObj.text;
    button.innerHTML = `<i class='bx bx-minus-circle' ></i>`;
    button.addEventListener("click", deleteToDo);
    toDoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);
}

function handleToDoSubmit(e) {
    e.preventDefault();
    const newToDo = toDoInput.value;
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    toDoInput.value = "";
    paintToDo(newToDoObj);
    setSubMenu(newToDoObj);
    saveToDos();
    setQuote();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); // String 상태로 반환
setQuote();

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); // Array형태로 반환
    toDos = parsedToDos;
    parsedToDos.forEach((item) => {
        paintToDo(item);
        setSubMenu(item);
    });
}