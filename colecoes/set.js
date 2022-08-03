function elementosUnicos(array) {
	let unico = new Set(array);
	return [...unico];
}

const arr = [30, 30, 40, 5, 223, 2049, 5];

console.log(elementosUnicos(arr));