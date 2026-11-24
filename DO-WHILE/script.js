// DO-WHILE
let n = Number(prompt("Números sequência de Fibonacci: "));

let antes = 0;
let agora = 1;
let depois = "";
let contador = 1;

do {
    depois += antes + ",";

    let proximo = antes + agora;
    antes = agora;
    agora = proximo;

    contador++;
} while (contador <= n);
console.log("Os primeiros" + n + "números de Fibonacci: " + depois);
