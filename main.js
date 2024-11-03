// variabili
const workTime = 10; //ore di lavoro
const finalResult = document.getElementById('finalPrice');
const result = finalResult.querySelector('#result')
const calcForm = document.getElementById('prevForm');

calcForm.addEventListener('submit', function (event) {
    let workSelected = document.getElementById('workType').value; //tipo di lavoro
    event.preventDefault();
    result.innerHTML = priceCalc(workTime, workSelected);
    finalResult.classList.remove('d-none')
})



//funzioni

function priceCalc(workTime, workSelected) {
    let workPrice = 0; // prezzo variabile in base al tipo di lavoro selezionato dall'utente
    if (workSelected == 1) {
        workPrice = 15.30;   
    }else if(workSelected == 2){
        workPrice = 20.50;
    }else if(workSelected == 3){
        workPrice = 33.60;
    }
    
    let finalPrice = workPrice * workTime;
   
    

    return finalPrice
}











