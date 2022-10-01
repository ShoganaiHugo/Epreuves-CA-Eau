
function argReverse(arrayOfWord) {
  //On vérifie s'il existe un paramètre
  if (arrayOfWord.length !== 0) {

    // On renvoie les paramètres dans l'autre sens, ligne par ligne
    let max = arrayOfWord.length - 1;
    for (let i = 0; i !== max + 1; i++ ) {
      console.log(arrayOfWord[max - i]);
    }
  // On gère les erreurs  
  } else {
    console.log('erreur.');
  }
}


return argReverse(process.argv.slice(2));