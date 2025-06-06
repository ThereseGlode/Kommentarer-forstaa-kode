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
   
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    
    // Lager et span for selve teksten (som kan få strek over)
    const todoText = document.createElement("span");
    todoText.textContent = todoInputValue;
    todoText.classList.add("todo-text");

    // CSS STYLING
    todoItem.classList.add("todo-item"); 
    
    // Lager "Oppdrag utført"-knapp
    const completeButton = document.createElement("button"); // Lager en ny knapp i JavaScript
    completeButton.textContent = "Oppdrag utført";           // Setter tekst på knappen
    completeButton.classList.add("complete-button");         // Legger til en klasse for CSS-styling

    // Legger til funksjon når knappen klikkes
    completeButton.addEventListener("click", function(event) {
    event.stopPropagation(); // Stopper at klikket også påvirker foreldre-elementer

    // Bytter på om teksten er ferdig eller ikke
    todoText.classList.toggle("completed"); // Legger til eller fjerner klassen "completed" på teksten

    // Endrer knappens tekst hvis oppgaven er markert som ferdig
    completeButton.textContent = todoText.classList.contains("completed") 
        ? "✅"                              // Hvis den er ferdig → vis emoji
        : "Oppdrag utført";                // Hvis ikke → vis vanlig tekst
});
  
      // Lager "Slett"-knapp
      const deleteTodo = document.createElement("button");
      deleteTodo.textContent = "Slett";
      deleteTodo.classList.add("delete-button");
  
      deleteTodo.addEventListener("click", function(event) {
          event.stopPropagation();
          todoItem.remove();
      });
  
      // Legger knapper til i todo-elementet 
      todoItem.appendChild(todoText);
      todoItem.appendChild(completeButton);
      todoItem.appendChild(deleteTodo);
     

      // Legger til todo-element i lista
      const todoDisplay = document.getElementById("todoDisplay");
      console.log(todoDisplay);
      todoDisplay.appendChild(todoItem);
  
      // Tøm inputfelt
      todoInput.value = "";
  });