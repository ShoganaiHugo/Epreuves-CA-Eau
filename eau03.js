function fibonacci(nbr) {
  // On gère les erreurs d'arguments
  if (nbr.length === 0 || nbr.length > 1 || isNaN(nbr) === true || Math.sign(Number(nbr)) === -1) {
    return -1;

  // On recherche le nbr élément de la suite de Fibonacci
  } else {
    if(nbr < 2){
      return nbr;
    }
    return fibonacci(nbr - 1) + fibonacci(nbr - 2);
  }
}

console.log(fibonacci(process.argv.slice(2)));