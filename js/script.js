"use strict";
class Smartphone {
    constructor(carica) {
        this.costoMinutiChimata = 0.2;
        this.minutiChimata = 0;
        this.numeroChiamate = 0;
        this.carica = carica;
    }
    ricarica(unaRicarica) {
        console.log("Hai fatto una ricarica da " + unaRicarica + "€");
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        // if (minutiDurata !== NaN) {
        console.log("Hai fatto una chiamata da :" + minutiDurata + "minuti");
        this.minutiChimata += minutiDurata;
        this.carica = this.carica - this.minutiChimata * this.costoMinutiChimata;
        this.numeroChiamate++;
        this.minutiChimata = 0;
        // } else {
        //   alert("Devi inserire un numero!!");
        // }
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
let ut1 = new Smartphone(12);
console.log("Questo è il tuo attuale saldo " + ut1.numero404() + "€");
ut1.ricarica(10);
console.log("Questo è il tuo attuale saldo " + ut1.numero404() + "€");
ut1.chiamata(10);
console.log("Questo è il tuo attuale saldo " + ut1.numero404() + "€");
console.log("Numero chimate : " + ut1.getNumeroChiamate());
ut1.chiamata(10);
console.log("Questo è il tuo attuale saldo " + ut1.numero404() + "€");
console.log("Numero chimate : " + ut1.getNumeroChiamate());
ut1.chiamata(10);
console.log("Questo è il tuo attuale saldo " + ut1.numero404() + "€");
console.log("Numero chimate : " + ut1.getNumeroChiamate());
window.addEventListener("DOMContentLoaded", () => {
    let display = document.querySelector("#display");
    function tasti() {
        let button = document.querySelectorAll("button");
        button.forEach((ele) => {
            ele === null || ele === void 0 ? void 0 : ele.addEventListener("click", () => {
                let btn = ele.value;
                mostraScermo(btn);
            });
        });
    }
    function mostraScermo(element) {
        display = document.querySelector("#display");
        display.value += element;
    }
    tasti();
    function cancellaScermo() {
        let deleteButton = document.querySelector(".delete");
        deleteButton === null || deleteButton === void 0 ? void 0 : deleteButton.addEventListener("click", () => {
            let deleteDisplay = (display.value = "");
            mostraScermo(deleteDisplay);
        });
    }
    cancellaScermo();
    function faiUnaChiamata() {
        let chimataButton = document.querySelector(".call-start");
        chimataButton === null || chimataButton === void 0 ? void 0 : chimataButton.addEventListener("click", () => {
            if (display.value !== "404") {
                let minutiChimataUt = prompt("Quanto dura la chiamata?");
                let numMinutiChimataUt = Number(minutiChimataUt);
                ut1.chiamata(numMinutiChimataUt);
                console.log(ut1.numero404());
            }
            else if (display.value === "404") {
                let creditoResiduo = ut1.numero404();
                let saldoAlert = alert("Il tuo saldo è di " + creditoResiduo + "€");
            }
        });
    }
    faiUnaChiamata();
});
