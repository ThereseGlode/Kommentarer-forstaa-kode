console.log('Hello!'); //




// Lager en variabel som lagrer at den henter et element fra HTML med id-navn addTodo
const addTodo = document.getElementById("addTodo"); 
console.log(addTodo)

// Legger til en funksjon som kjører når man klikker på knappen
addTodo.addEventListener("click",function(event) {
    event.preventDefault(); // Stopper siden fra å laste på nytt ved klikk
    console.log("Button click!");
  
    // Henter inputfeltet og lagrer det i en variabel
    const todoInput = document.getElementById("todoInput");
    console.log(todoInput);
   
    // Henter det brukeren skrev i inputfeltet
    const todoInputValue = todoInput.value;
    console.log(todoInputValue);
   
    // Lager et nytt <li>-element for å vise todo-oppgaven
    const todoItem = document.createElement("li");
    console.log(todoItem);
   
    // Setter teksten i <li>-elementet til det brukeren skrev
    todoItem.textContent = todoInputValue;

    // CSS STYLING
    todoItem.classList.add("todoItem")
  
    // Lager en "Slett"-knapp
    const deleteTodo = document.createElement("button");
    deleteTodo.textContent = " Slett "; // Setter teksten på slette knappen

    // CSS styling på slett knappen
    deleteTodo.classList.add("delete-button");
   
   // Legger til en funksjon som sletter todo-elementet når man trykker på knappen (click)
    deleteTodo.addEventListener("click", function (){
        todoItem.remove(); // Fjerner todo-elementet fra lista
    })
  
    // Henter elementet der vi skal vise todo-lista (ul eller ol)
    const todoDisplay = document.getElementById("todoDisplay");
    console.log(todoDisplay);
   
    // Legger "Slett"-knappen inn i <li>-elementet
    todoItem.appendChild(deleteTodo);
    // Legger <li>-elementet inn i todo-lista
    todoDisplay.appendChild(todoItem);

    // Tømmer inputfeltet etterpå
    todoInput.value = "";

});