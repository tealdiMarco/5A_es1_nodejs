/*Require x fare server*/
/*
!   http-> indispensabile se voglio fare client - server
?   require-> come import
!   url-> analizzare e parsificare l'url


!   per avviare server uso comando terminale: node server.js
*/
const http = require("http");
const url = require("url");

/*
*   1° parametro-> Richiesta Client
*   2° parametro-> Risposta Client
*/
var server = http.createServer(function(request, response){
/************************* RICHIESTA ********************************/ 
    let testoRisposta = `
        url: ${request.url}
        host: ${request.headers.host}
        metodo: ${request.method}
    `;  

    // Estraggo le info dalla stringa completa scritta dal client nella barra delgi indirizzi
    let indirizzo = request.headers.host + request.url;
    let infoUrl = url.parse(indirizzo, true);

    testoRisposta += `
        pathname: ${infoUrl.pathname}
        parametri: ${infoUrl.search}
    `;

    // Estraggo i parametri
    let parametri = infoUrl.query;

    testoRisposta += `
        action: ${parametri.action}
        parametro1: ${parametri.p1}
    `;

/************************ RISPOSTA  *********************************/    
    let header = {"Content-Type":"text/plain"}
    /*
        1° parametro-> codice di risposta (404 | 202)
        2° parametro-> Oggetto json-> insieme di opzioni che vogliamo inserire nell'intestazione
    */
    response.writeHead(200,header);

    // Modificare il contenuto del pacchetto (Posso richiamare write anche piu di una volta-> Aggiungo sempre)
    response.write("Luca frocio per i LEGO \n"+ testoRisposta);

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
/* http://localhost:1337/pippococa.html?action=pluto&p1=paperino */

// Serializzare -> trasformo oggetto in stringa
// parse -> trasformo stringa in oggetto