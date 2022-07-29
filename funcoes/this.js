const pessoa1 ={
  nome: 'julia',
  idade: 20,
};
const pessoa2 ={
  nome: 'marcelo',
  idade: 54,
};
const animal1 ={
  nome: 'meg',
  idade: 4,
};
const animal2 ={
  nome: 'mel',
  idade: 8,
};
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} (que tem ${this.idade}) terá ${
		this.idade + anos
	} anos de idade.`;
}
console.log(calculaIdade.call(pessoa2, 20));
console.log(calculaIdade.apply(animal1, [6]));