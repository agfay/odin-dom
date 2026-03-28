// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const newPar = document.createElement("p");
newPar.classList.add("newPar");
newPar.textContent = "Hi I'm red!";
newPar.style.color = "Red";

const newHead = document.createElement("h3");
newHead.classList.add("newHead");
newHead.textContent = "Hi I'm a blue h3!";
newHead.style.color = "blue";

const newDiv = document.createElement("div");


container.appendChild(content);
container.appendChild(newPar);
container.appendChild(newHead);
