var idade = 65;
var idade = Number.parseInt(idade);
console.log(`Você tem ${idade}`);
if (idade < 16) {
  console.log("Não vota");
} else if (idade >= 18 && idade < 65) {
  console.log("Voto obrigatório");
} else {
  console.log("Voto opcional");
}
