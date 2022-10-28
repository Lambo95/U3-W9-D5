interface ISmartphone {
  ricarica(unaRicarica: number): void;
  chiamata(minutiDurata: number): void;
  numero404(): number;
  getNumeroChiamate(): number;
  azzeraChiamate(): void;
}

class Smartphone implements ISmartphone {
  private costoMinutiChimata: number = 0.2;
  private minutiChimata: number = 0;
  private carica: number;
  private numeroChiamate: number = 0;
  constructor(carica: number) {
    this.carica = carica;
  }
  ricarica(unaRicarica: number): void {
    console.log("Hai fatto una ricarica da " + unaRicarica + "€");

    this.carica += unaRicarica;
  }
  chiamata(minutiDurata: number): void {
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
  numero404(): number {
    return this.carica;
  }
  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }
  azzeraChiamate(): void {
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
  let display = <HTMLInputElement>document.querySelector("#display");

  function tasti() {
    let button = document.querySelectorAll("button");
    button.forEach((ele) => {
      ele?.addEventListener("click", () => {
        let btn = ele.value;
        mostraScermo(btn);
      });
    });
  }

  function mostraScermo(element: string) {
    display = <HTMLInputElement>document.querySelector("#display");
    display.value += element;
  }

  tasti();

  function cancellaScermo() {
    let deleteButton = document.querySelector(".delete");
    deleteButton?.addEventListener("click", () => {
      let deleteDisplay = (display.value = "");
      mostraScermo(deleteDisplay);
    });
  }

  cancellaScermo();

  function faiUnaChiamata() {
    let chimataButton = document.querySelector(".call-start");
    chimataButton?.addEventListener("click", () => {
      if (display.value !== "404") {
        let minutiChimataUt = prompt("Quanto dura la chiamata?");

        let numMinutiChimataUt = Number(minutiChimataUt);
        ut1.chiamata(numMinutiChimataUt);
        console.log(ut1.numero404());
      } else if (display.value === "404") {
        let creditoResiduo = ut1.numero404();
        let saldoAlert = alert("Il tuo saldo è di " + creditoResiduo + "€");
      }
    });
  }

  faiUnaChiamata();
});
