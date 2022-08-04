function validaArray(array,numero){
  try {
    if (!numero && !array) throw new ReferenceError('Envie os parâmetros!');
    if (typeof array !== 'object') throw new TypeError('Envie um elemento do tipo array!');
    if (typeof numero !== 'number') throw new TypeError('Envie um numero inteiro!');
    if (array.length !== numero) throw new RangeError('Tamanho do array inválido!');
    return array;
  } catch (error) {
    if ( error instanceof RangeError){
      console.log(error.message);
      console.log('RangeError');
    } else if (error instanceof ReferenceError){
      console.log(error.message);
      console.log('ReferenceError');
    } else if (error instanceof TypeError){
      console.log(error.message);
      console.log('TypeError');
    } else {
      console.log('Outro tipo de erro!');
      console.log(error.message);
    }
  }
}
console.log(validaArray([1,2], 2))