function longueursMots(mots) {
	let tab = [];
	let res = 0;
	for (let i = 0; i < mots.length; i++) {
		res = mots[i].length;
		tab.push(res);
	}
	return tab;
}

console.log(longueursMots(["chat", "éléphant", "lion"])); // Résultat attendu : [4, 8, 4]
