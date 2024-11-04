// variabili
const workTime = 10; //ore di lavoro standard
const finalResult = document.getElementById('finalPrice'); // recupero prezzo visualizzato nel DOM
const result = finalResult.querySelector('#result') 
const calcForm = document.getElementById('prevForm'); // form principale che contiene i dati inseriti dakk'utente
const discountCodes = ['YHDNU32', 'JANJC63', 'PWKCN25', 'PWKCN25', 'POCIE24'] //codici sconto validi



//calcolo del prezzo finale al sumbit dell'utente 



calcForm.addEventListener('submit', function (event) {

    //recupero dati dal form

    let workSelected = document.getElementById('workType').value; //tipo di lavoro
    let discountInsert = document.getElementById("promoCode").value; // codice sconto inserito dall'utente
    let finalPrice = priceCalc(workTime, workSelected).toFixed(2); // calcolo del prezzo finale 
    let discount = (finalPrice * 25) / 100; //calcolo dell'eventuale sconto da applicare
    
    //istruzione condizionale per verificare idoneità sconto e manipolazione del DOM

    if (discountCodes.includes(discountInsert) == true) {
        let priceDisc = finalPrice - discount;  
        result.innerHTML += priceDisc;
             
    }else {
        alert('Inserisci un codice sconto valido!')
        result.innerHTML += finalPrice;
    }

    result.classList.add('fs-5')

    event.preventDefault();
    
    finalResult.classList.remove('d-none')
})



//funzioni



//funzione che calcola il prezzo del lavoro in base alla selezione dell'utente
/**
 * Description
 * @param {number} workTime ore di lavoro
 * @param {string} workSelected lavoro selezionato
 * @returns {number} prezzo finale
 */


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












