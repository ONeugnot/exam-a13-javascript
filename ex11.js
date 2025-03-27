function filtrerPairs(tab) {
	let res = [];
	for (let i = 0; i < tab.length; i++) {
		if (tab[i] % 2 == 0) {
			res.push(tab[i]);
		}
	}
	return res;
}

console.log(filtrerPairs([1, 2, 3, 4, 5, 6])); // Résultat attendu : [2, 4, 6]
console.log(filtrerPairs([0, -2, -4, 18, 5, 6])); // Résultat attendu : [0, -2, -4, 18, 6]
