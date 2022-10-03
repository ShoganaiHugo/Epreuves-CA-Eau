function triAscii(arr) {
  // On gère les erreurs de paramètres
  if (arr.length < 2) {
    return 'error';

  } else {

    // On va s'assurer que les paramètres ne sont pas des valeurs numériques
    // J'utilise la même méthode que pour l'exo "Chiffres Only"
    let arrStr = arr.join('');
    let count = 0;
    const numbers = '0123456789';

    while (count < arrStr.length) {
      if (numbers.includes(arrStr.charAt(count))) {
        return 'erreur';
      } else {
        count++;
      }
    }

    // On créé un array de resultat, une var pour stocker temporairement des valeurs et un compteur
    let tmp = '';
    let i = 0;
    let newArr = arr;
    // Pour que le check se fasse jusu'à ce que tout soit ok
    while (i < newArr.length) {
      
      if (newArr[i] > newArr[i+1]) {
        // On décale tout à gauche le première élément par ordre ASCII
        tmp = newArr[i];
        newArr[i] = newArr[i+1];
        newArr[i+1] = tmp;
        // On fait en sorte que i = 0 pour boucler jusqu'à ce que le array soit trié
        i = -1;
      }
      i++;
    }

    // On affiche le tableau de résultat
    return newArr;

  }
}


console.log(triAscii(process.argv.slice(2)));