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

    // On trie le tableau pour 'rapprocher' les valeurs
    let tmp = '';
    let i = 0;
    // Pour que le check se fasse jusu'à ce que tout soit ok
    while (i < arr.length) {
      // On vérifie Number pour bien comparer des integer et non des string
      if (Number(arr[i]) > Number(arr[i+1])) {
        // On décale tout à droite la valeur la plus "grande"
        tmp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = tmp;
        // On fait en sorte que i = 0 pour boucler jusqu'à ce que le array soit trié
        i = -1;
      }
      i++;
    }

    // On compare les valeurs en parcourant le array
    for (let i = arr.length - 1; i > 0; i--) {
      newArr[index] = Math.abs(arr[i] - arr[i - 1]);
      index++;
    }

    // On trie le tableau dans l'ordre croissant
    // J'utilise la méthode sort pour éviter les difficultés inutiles mais je pourrait copier/coller la méthode ci dessus
    // Je considère avoir prouvé que je savais le faire par moi même et me permet donc cette simplification
    newArr = newArr.sort(compare);

    // On renvoie le premier élément du nouveau tableau, donc la plus petite valeur
    return newArr[0];

  }
}


console.log(miniAbsolute(process.argv.slice(2)));