const button = document.querySelector(".input-box.button");
const loginInput = document.querySelector(".input-box.input-user input");
const loginContainer = document.querySelector(".login__container");
const greeting = document.querySelector(".greeting");
const todoListContainer = document.querySelector(".todoList__container");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(e) {
    e.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginContainer.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(username);
}

function paintGreeting(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todoListContainer.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerHTML = `<h2>Welcome ${username}</h2>`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    todoListContainer.classList.add(HIDDEN_CLASSNAME);
    loginContainer.classList.remove(HIDDEN_CLASSNAME);
    button.addEventListener("click", onLoginSubmit);
} else {
    paintGreeting(savedUsername);
}



