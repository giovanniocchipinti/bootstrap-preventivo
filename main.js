// variabili
const workTime = 10; //ore di lavoro
const finalResult = document.getElementById('finalPrice');
const result = finalResult.querySelector('#result')
const calcForm = document.getElementById('prevForm');

//prezzo finale



calcForm.addEventListener('submit', function (event) {
    let workSelected = document.getElementById('workType').value; //tipo di lavoro
    event.preventDefault();
    result.classList.add('fs-5')
    result.innerHTML = priceCalc(workTime, workSelected).toFixed(2);
    finalResult.classList.remove('d-none')
})



//funzioni



//funzione che calcola il prezzo del lavoro in base alla selezione dell'utente
function priceCalc(workTime, workSelected) {
    let workPrice = 0; // prezzo variabile in base al tipo di lavoro selezionato dall'utente
    if (workSelected == 1) {
        workPrice = 15.30;   
    }else if(workSelected == 2){
        workPrice = 20.50;
    }else if(workSelected == 3){
        workPrice = 33.60;
    }
    
    let finalPrice = workTime * workPrice
    
    return finalPrice
}











