/*Require x fare server*/
/*
!   http-> indispensabile se voglio fare client - server
?   require-> come import
!   per avviare server uso comando terminale: node server.js
*/
const http = require("http");

/*
*   1° parametro-> Richiesta Client
*   2° parametro-> Risposta Client
*/
var server = http.createServer(function(request, response){
    
    let header = {"Content-Type":"text/plain"}
    /*
        1° parametro-> codice di risposta (404 | 202)
        2° parametro-> Oggetto json-> insieme di opzioni che vogliamo inserire nell'intestazione
    */
    response.writeHead(200,header);

    // Modificare il contenuto del pacchetto (Posso richiamare write anche piu di una volta-> Aggiungo sempre)
    response.write("Luca frocio per i LEGO");

    // Informo il server che ho terminato di preparare il pacchetto di risposta
    response.end();

});
/*
!   FONDAMENTALE SE VOGLIO AVVIARE IL SERVER
*   1° parametro-> porta
*   2° parametro-> indirizzo IP

*/
server.listen(1337);

console.log("Il server è stato avviato sulla porta 1337");