function comparanumeros(num1, num2) {
  const primeirafrase = criaprimeirafrase(num1, num2);
  const segundafrase = criasegundafrase(num1, num2);
  return `${primeirafrase} ${segundafrase}`;
}

function criaprimeirafrase(num1, num2) {
  let primeirafrase = `Os números ${num1} e ${num2}`;
  let saoiguais = '';
  if (num1 !== num2) {
    saoiguais = 'não';
  }
  return `${primeirafrase} ${saoiguais} são iguais.`;
}
function criasegundafrase(num1, num2) {
  const soma = num1 + num2;
  let compara10 = 'menor';
  let compara20 = 'menor';
  if (soma > 10) {
    compara10 = "maior";
  }
  if (soma > 20) {
    compara20 = "maior";
  }
  return `Sua soma é ${soma}, que é ${compara10} do que 10 e ${compara20} do que 20.`;
}

console.log(comparanumeros(3, 12));
