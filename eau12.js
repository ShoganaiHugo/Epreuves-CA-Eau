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

    let tmp = 0;
    for (let i = arr.length - 1; i = 1; i--) {
      for (let j = 1; j === i; j++) {
        if (arr[j] > arr[j + 1]) {
          tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
        } else {
          continue;
        }
      }
    }

    return arr;

  }
}


console.log(miniAbsolute(process.argv.slice(2)));