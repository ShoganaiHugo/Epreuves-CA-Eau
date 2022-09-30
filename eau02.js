
function argReverse(arrayOfWord) {
  //On vérifie s'il existe un argument
  if (arrayOfWord !== 0) {

    // On renvoie les arguments dans l'autre sens
    let max = arrayOfWord.length - 1;
    for (let i = 0; i != max + 1; i++ ) {
      console.log(arrayOfWord[max - i]);
    }
  // On gère les erreurs  
  } else {
    console.log('erreur.');
  }
}


return argReverse(process.argv.slice(2));