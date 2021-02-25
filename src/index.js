document.addEventListener("DOMContentLoaded", (event) => {
  //your code here
});
 

const form = document.querySelector("#create-task-form")

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const li = document.createElement("li")

  li.innerText = e.target["new-task-description"].value

  const ul = document.querySelector("#tasks")

  ul.appendChild(li)

  const button = document.createElement("button");
  button.innerText = "x";

  li.appendChild(button);

  button.addEventListener("click", function(e) {
    e.target.parentElement.remove();
    })
  })
