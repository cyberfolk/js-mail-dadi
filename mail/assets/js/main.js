/*
 * MAIL
 * Chiedi all’utente la sua email,
 * controlla che sia nella lista di chi può accedere,
 * stampa un messaggio appropriato sull’esito del controllo.
 * MAIL BONUS
 * Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
 *
 * CONSIGLI DEL GIORNO:
 * scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
 * javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
 * si ma noi cosa vogliamo fare?
 * torniamo a scrivere in italiano
 * proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
 * Buon divertimento e confermate lettura come al solito :baby-yoda:
 */
// Select dom element
const formEl = document.querySelector("form");
const statusEl = document.querySelector("#status");
let statuFlag = false;
const DB_MAIL = ["pippo", "pluto", "paperino", "pippo baudo", "pippo_franco", "pippo_calò"];

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const tryMail = e.target.tryMail.value;

  for (let i = 0; i < DB_MAIL.length; i++) {
    if (tryMail == DB_MAIL[i]) {
      statuFlag = true;
    }
  }

  if (statuFlag == true) {
    statusEl.innerText = "Sei loggato";
  }
});

formEl.addEventListener("reset", function (e) {
  console.log("ho cliccato su reset");
  // svuto il ticket
  statusEl.innerHTML = "Non sei loggato";
});
