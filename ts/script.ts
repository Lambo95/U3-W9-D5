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
    if (isNaN(unaRicarica)) {
      alert("Devi inserire un numero!");
      this.carica = this.carica;
    } else {
      alert("Hai fatto una ricarica da " + unaRicarica + "€");
      this.carica += unaRicarica;
    }
  }
  chiamata(minutiDurata: number): void {
    if (this.carica === 0) {
      alert("Non hai credito per le chiamate! Fai una ricarica! Chiama il 0101");
    } else if (!isNaN(minutiDurata)) {
      console.log("Hai fatto una chiamata da :" + minutiDurata + "minuti");
      this.minutiChimata += minutiDurata;
      this.carica = this.carica - this.minutiChimata * this.costoMinutiChimata;
      this.numeroChiamate++;
      this.minutiChimata = 0;
    } else {
      alert("Devi inserire un numero!!");
    }
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

// let ut1 = new Smartphone(12);
// console.log("Questo è il tuo attuale saldo " + ut1.numero404() + "€");

// ut1.ricarica(10);
// console.log("Questo è il tuo attuale saldo " + ut1.numero404() + "€");

// ut1.chiamata(10);
// console.log("Questo è il tuo attuale saldo " + ut1.numero404() + "€");

// console.log("Numero chimate : " + ut1.getNumeroChiamate());

// ut1.chiamata(10);
// console.log("Questo è il tuo attuale saldo " + ut1.numero404() + "€");

// console.log("Numero chimate : " + ut1.getNumeroChiamate());

// ut1.chiamata(10);
// console.log("Questo è il tuo attuale saldo " + ut1.numero404() + "€");
// console.log("Numero chimate : " + ut1.getNumeroChiamate());

let utente1 = new Smartphone(0);

window.addEventListener("DOMContentLoaded", () => {
  let display = <HTMLInputElement>document.querySelector("#display");

  //   function creaSmartphone(): Smartphone { {
  //     let credito = document.querySelector("#credito") as HTMLInputElement;
  //     let utente1 = new Smartphone(Number(credito.value));
  //     return utente1
  //   }
  // function createUt(){
  //   let btnCreate = document.querySelector("#creaSmartphone");
  //   btnCreate?.addEventListener("click", creaSmartphone())
  // }
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
      if (display.value !== "404" && display.value !== "0101") {
        let minutiChimataUt = prompt("Quanto dura la chiamata?");
        let numMinutiChimataUt = Number(minutiChimataUt);
        utente1.chiamata(numMinutiChimataUt);
        console.log(utente1.numero404());
      } else if (display.value === "404") {
        let creditoResiduo = utente1.numero404();
        alert("Il tuo saldo è di " + creditoResiduo + "€");
      } else if (display.value === "0101") {
        let ricaricaNum = prompt("Quanto vuoi ricaricare?");
        let ricaricaTel = Number(ricaricaNum);
        utente1.ricarica(ricaricaTel);
        console.log(utente1.numero404());
      }
    });
  }

  faiUnaChiamata();

  function showCall() {
    let showCallBtn = document.querySelector(".showCall");
    showCallBtn?.addEventListener("click", () => {
      alert("Hai fatto " + utente1.getNumeroChiamate() + " chiamate");
    });
  }

  showCall();

  function deleteCallList() {
    let deleteCallList = document.querySelector(".deleteCall");
    deleteCallList?.addEventListener("click", () => {
      utente1.azzeraChiamate();
      alert("Hai calcellato la cronologia chiamate!");
    });
  }

  deleteCallList();
});
