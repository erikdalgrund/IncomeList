// A few global variables. 

let calculateIncome = 0; 
let calculateExpenses = 0; 

var incomeBtn = document.querySelector(".income-button").addEventListener("click", incomeList);
var expenseBtn = document.querySelector(".expense-button").addEventListener("click", expensesList);

// A function for the expense list and the expense button.

function expensesList(e){

    e.preventDefault();  
    // Collecting value from the inputfields. 
    let inputText = document.getElementById("text-input").value; 
    let inputValue = document.getElementById("cost-input").value; 
  
    const expenseListDiv = document.querySelector(".left-list-container"); 
    // Creating the list element for the inputs in the expense list.
    const listelement = document.createElement("li");
    // Creating a remove button for list inputs. 
    let butn = document.createElement("button")
    // Setting a class for the button and adding the trashcan icon.
    butn.setAttribute("class","btn");
    butn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    // Placing the input values from the input fields inside the list element. 
    listelement.innerHTML += `${inputText}&nbsp;: &nbsp; - ${inputValue}&nbsp`;
    // Adding reason for the remove button to exist. 
    butn.addEventListener("click", () => remove(inputValue));
    
    expenseListDiv.appendChild(listelement).appendChild(butn)
    // Creating a function that removes the list element, button element and also calculates and removes value
    // from the "total capital" section. 
    function remove(inputValue) {
        expenseListDiv.removeChild(listelement).removeChild(butn);
        calculateExpenses -= Number(inputValue); 
        updateResult()
    }
    // Adds addition for the value of the expense input. 
    calculateExpenses += Number(inputValue);
    // Calls the function listed below. 
    updateResult()

} 
    


function incomeList(e) {

    e.preventDefault(e); 
    // Collecting value from the inputfields. Same as the function above. 
    // (Could you keep everything in one function and sort it with   IF / ELSE ???? = A question named "Could you?" )
    let inputText = document.getElementById("text-input").value; 
    let inputValue = document.getElementById("cost-input").value; 
    
    const incomeListDiv = document.querySelector(".right-list-container");
    // Creating the list element for the inputs in the expense list.   (  "Could you?"  )
    const listelement = document.createElement("li");
    // Creating a remove button for list inputs.   (   "Could you?"  )
    let butn = document.createElement("button")
    // Setting a class for the button and adding the trashcan icon.   (   "Could you?"  )
    butn.setAttribute("class","btn");
    butn.innerHTML = '<i class="fas fa-trash-alt"></i>'; 
    // Placing the input values from the input fields inside the list element.   (   "Could you?"  ) 
    listelement.innerHTML += `${inputText}&nbsp;: &nbsp; + ${inputValue}&nbsp;`; 
    // Adding reason for the remove button to exist.   (   "Could you?"  )
    butn.addEventListener("click", () => remove(inputValue)); 

    incomeListDiv.appendChild(listelement).appendChild(butn)
    // Everything here is the same as the function above.   (   "Could you?"  )
    function remove(inputValue) {
        incomeListDiv.removeChild(listelement).removeChild(butn)
        calculateIncome -= Number(inputValue); 
        updateResult()
    }
    calculateIncome += Number(inputValue); 
    updateResult()
} 

function updateResult() {
    const resultList = document.querySelector(".result"); 
    resultList.innerHTML   =  ` ${calculateIncome - calculateExpenses}`;
}

