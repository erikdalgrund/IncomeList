let calculateIncome = 0; 
let calculateExpenses = 0; 

var incomeBtn = document.querySelector(".income-button").addEventListener("click", incomeList);
var expenseBtn = document.querySelector(".expense-button").addEventListener("click", expensesList);

function expensesList(e){

    e.preventDefault();  

    let inputText = document.getElementById("text-input").value; 
    let inputValue = document.getElementById("cost-input").value; 
  
    const expenseListDiv = document.querySelector(".left-list-container"); 
    const listelement = document.createElement("li");
    let butn = document.createElement("button")
    butn.setAttribute("class","btn");
    butn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    listelement.innerHTML += `${inputText}&nbsp;: &nbsp; - ${inputValue}&nbsp`;
    console.log(listelement)
    butn.addEventListener("click", () => remove(inputValue));

    expenseListDiv.appendChild(listelement).appendChild(butn)
    
    function remove(inputValue) {
        expenseListDiv.removeChild(listelement).removeChild(butn);
        calculateExpenses -= Number(inputValue); 
        updateResult()
    }
    
    calculateExpenses += Number(inputValue);
    updateResult()

} 
    


function incomeList(e) {

    e.preventDefault(e); 
    
    let inputText = document.getElementById("text-input").value; 
    let inputValue = document.getElementById("cost-input").value; 
    
    const incomeListDiv = document.querySelector(".right-list-container");

    const listelement = document.createElement("li");
    let butn = document.createElement("button")
    butn.setAttribute("class","btn");
    butn.innerHTML = '<i class="fas fa-trash-alt"></i>'; 
    listelement.innerHTML += `${inputText}&nbsp;: &nbsp; + ${inputValue}&nbsp;`; 

    butn.addEventListener("click", () => remove(inputValue)); 

    incomeListDiv.appendChild(listelement).appendChild(butn)
    
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

