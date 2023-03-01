function parimp(n) {
  if (n % 2 == 0) {
    return "Par";
  } else {
    return "Impar";
  }
}

function fatorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

let num = parimp(4);
let fat = fatorial(3);
console.log(num);
console.log(fat);
