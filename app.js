//Get elements from the DOM
let form = document.querySelector("form");
let input = document.querySelector("input");
let message = document.querySelector(".message-container");
let output = document.querySelector(".output");

//Function to get a task
function getTask(value) {
  //Create task element and text element
  let taskElement = document.createElement("div");
  let textElement = document.createElement("span");

  textElement.textContent = value;
  taskElement.appendChild(textElement);
  message.textContent = "Item Added";
  message.classList.toggle("success");

  //Hide success message after 2000 milliseconds
  setTimeout(() => {
    message.classList.toggle("success");
  }, 2000);

  //Create close button element
  let closeElement = document.createElement("span");

  closeElement.innerHTML = "&cross;";
  closeElement.classList.add("delete");
  taskElement.appendChild(closeElement);

  //Add event listener to close button
  closeElement.addEventListener("click", () => {
    //Remove task from output
    output.removeChild(taskElement);

    message.textContent = "Item Deleted";
    message.classList.toggle("error");

    //Hide error message after 2000 milliseconds
    setTimeout(() => {
      message.classList.toggle("error");
    }, 2000);
  });

  //Add task class to task element
  taskElement.classList.add("task");

  //Return the task element
  return taskElement;
}

//Event Listener for form element
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = input.value;

  //check if the trimmed value is not empty
  if (!value.trim()) return;

  output.appendChild(getTask(value));
  input.value = "";
});
