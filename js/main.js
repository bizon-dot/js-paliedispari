/*  
        !TODO:

        // L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
        // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
        // Sommiamo i due numeri
        // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
        // Dichiariamo chi ha vinto.

*/

/*  
    ========================================================================================================
        1.                              Genera un numero casuale tra 1 e 5
    ========================================================================================================
    
*/

function generateRandomNum() {
    var randomNum = Math.floor(Math.random() * 6);
    console.log(randomNum)
    return randomNum;
}

/*  
    ========================================================================================================
        2.                              Stabilisco se la somma è un numero pari o dispari
    ========================================================================================================
    
*/

function isEvenOrOdd(sum) {
    if (sum % 2 == 0)
        return true;
    else
        return false;
}


/*  
    ========================================================================================================
        3.                            Creo e popolo la div con il risultato del gioco                   
    ========================================================================================================
    
*/

function PrintResult(string){
    var div = document.createElement('div');
    div.id = 'result';
    div.innerHTML = string;
    div.className = 'container animate__rubberBand';
    document.body.appendChild(div);

}

/*  
    ========================================================================================================
        3.                                               Main                    
    ========================================================================================================
    
*/

document.getElementById("play").onclick = function () {
    // !TODO Da fixare
    // Ripulisco la div con il risultato
    
    // var DivResult = document.getElementById("result");
    // DivResult.remove();
     
    //Prendo l'input da sommare e la scommessa 
    var userNum = document.getElementById("user-number").value;
    var randomNum = generateRandomNum();
    var sum = parseInt(userNum) + parseInt(randomNum);
    var bet = isEvenOrOdd(sum);
    console.log(sum);
    console.log(bet);
    // Input radio 
    var betEven = document.getElementById("inlineCheckbox1").checked;
    var betOdd = document.getElementById("inlineCheckbox2").checked;
    if ((bet == true) && (betEven == true)) {
        var result = "the sum is even:you won!";
        //Creo e inserisco l'elemento nel DOM 
        PrintResult(result);    
    } else if ((bet == false) && (betOdd == true)) {
        var result = ("the sum is odd:you won!");
        PrintResult(result);  
    } else {
        console.log("you lose");
    }



};