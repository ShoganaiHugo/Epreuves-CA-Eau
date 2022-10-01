function fibonacci(nbr) {
  // On gère les erreurs de paramètres
  if (nbr.length === 0 || nbr.length > 1 || isNaN(nbr) === true || Math.sign(Number(nbr)) === -1) {
    return -1;

  // On recherche le nbr élément de la suite de Fibonacci
  // On limite a 40 car à partir de là ça devient long pour la console de calculer
  } else if (nbr <= 40) {
    if(nbr < 2){
      return nbr;
    } else {
      return fibonacci(nbr - 1) + fibonacci(nbr - 2);
    }

    // On gère le cas où le paramètre rempli les conditions ligne 3 mais est > 40 
  } else {
      return 'Merci de saisir un chiffre inferieur ou égal à 40.' ;    
  }
}

console.log(fibonacci(process.argv.slice(2)));