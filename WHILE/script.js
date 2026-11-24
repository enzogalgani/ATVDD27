// WHILE
let numero = Number(prompt("Digite um número para calcular o fatorial:"));

let fatorial = 1;
let contador = numero;

while (contador >= 1) {
    fatorial *= contador;
    contador--;
}
console.log("Fatorial de " + numero + ": " + fatorial);



