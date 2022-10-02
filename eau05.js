function contientChaine(arr) {
  // On gère les erreurs de paramètres
  if (arr.length !== 2 || !isNaN(arr) === true) {
    return 'error';

  } else {

    // return arr[0].includes(arr[1]);

    for (let i = 0; i < arr[1].length; i++) {
      if (arr[0].indexOf(arr[1]) !== -1) {
        return true;
      } else {
        return false;
      }
    }

  }
}


console.log(contientChaine(process.argv.slice(2)));