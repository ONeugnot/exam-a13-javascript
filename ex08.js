function multiplierParDeux(tab) {
	let newtab = [];
	for (let i = 0; i < tab.length; i++) {
		newtab.push(tab[i] * 2);
	}
	return newtab;
}
console.log(multiplierParDeux([1, 2, 3])); // Résultat attendu : [2, 4, 6]
