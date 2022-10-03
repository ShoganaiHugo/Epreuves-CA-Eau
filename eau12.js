function miniAbsolute(arr) {
  // On gère les erreurs de paramètres
  if (arr.length < 2) {
    return 'error';

  } else {

    // On va s'assurer que les paramètres sont bien des valeurs numériques
    // J'utilise la même méthode que pour l'exo "Chiffres Only"
    let arrStr = arr.join('');
    let count = 0;
    const numbers = '0123456789';

    while (count < arrStr.length) {
      if (numbers.includes(arrStr.charAt(count))) {
        count++;
      } else {
        return 'erreur';
      }
    }

    // On créé un array de resultat, une var pour stocker temporairement des valeurs et un compteur
    let tmp = '';
    let i = 0;
    let newArr = arr;
    // Pour que le check se fasse jusu'à ce que tout soit ok
    while (i < newArr.length) {
      // On vérifie Number pour bien comparer des integer et non des string
      if (Number(newArr[i]) > Number(newArr[i+1])) {
        // On décale tout à droite la valeur la plus "grande"
        tmp = newArr[i+1];
        newArr[i+1] = newArr[i];
        newArr[i] = tmp;
        // On fait en sorte que i = 0 pour boucler jusqu'à ce que le array soit trié
        i = -1;
      }
      i++;
    }

    // On affiche le tableau de résultat
    return newArr;

  }
}


console.log(miniAbsolute(process.argv.slice(2)));