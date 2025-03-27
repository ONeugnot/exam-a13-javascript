function nombreLettres(mot) {
	let tab = 0;
	for (let i = 0; i < mot.length; i++) {
		tab += mot[i].length;
	}
	return tab;
}

console.log(nombreLettres("chat")); // Résultat attendu : 4
