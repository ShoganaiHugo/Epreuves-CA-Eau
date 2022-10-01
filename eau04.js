function prochainPremier(nbr) {
  // On gère les erreurs de paramètres
  if (nbr.length === 0 || isNaN(nbr) === true || Math.sign(Number(nbr)) === -1) {
    return -1;

  } else {

    nbr++;

    // On vérifie si nbr++ est premier
    for (let i = 2; i <= Math.sqrt(nbr); i++) 
        // Si nbr n'est pas premier je rappel la fonction en changeant nbr par nbr++ pour tester le suivant
        if (nbr % i == 0) return prochainPremier(nbr++);
    // Si nbr est premier la boucle s'arrête, je peux donc return mon nouveau nbr     
    return nbr;
    
  }
}


console.log(prochainPremier(process.argv.slice(2)[0]));