// Servira plus tard pour trier un tableau dans l'ordre croissant
function compare(a, b) {
  return a - b;
}


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

    // On créé un nouveau tableau qui contient les différences absolues
    let newArr = [];
    let index = 0;

    for (let i = arr.length - 1; i > 0; i--) {
      newArr[index] = Math.abs(arr[i] - arr[i - 1]);
      index++;
    }

    // On trie le tableau dans l'ordre croissant
    newArr = newArr.sort(compare);

    // On renvoie le premier élément du nouveau tableau, donc la plus petite valeur
    return newArr[0];

  }
}


console.log(miniAbsolute(process.argv.slice(2)));