function indexWanted(arr) {
  // On gère les erreurs de paramètres
  if (arr.length === 0) {
    return 'error';

  } else {

    // On stocke le mot à chercher et le tableau qui acceuillera le reste du tableau initiale
    const search = arr[arr.length - 1];
    let newArray = [];

    // On recréé un tableau sans le dernier mot
    // Ici on pourrait utiliser arr = arr.splice(-1, 1) mais ça serait trop simple
    for (let i = 0; i < arr.length - 1; i++) {
      newArray[i] = arr[i];
    }

    // On va compter les itérations jusqu'à trouver le mot ou avoir parcouru toute la chaîne
    let count = 0;
    while (search !== newArray[count] && count <= newArray.length) {
      count++;
    }

    // On compare le résultat avec la taille du nouveau tableau pour savoir si on s'est arrété avant la fin ou non
    if (count === newArray.length + 1) {
      if (search === newArray[count]) {
        return count;
      } else {
        return -1;
      }
    } else {
      return count;
    }

  }
}


console.log(indexWanted(process.argv.slice(2)));