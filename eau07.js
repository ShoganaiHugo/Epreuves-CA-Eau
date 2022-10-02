// On donne une base d'alphabet pour tester plus tard si un caractère est une lettre
const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const forUpper = ' \t\n';

function majuscule(str) {
  // On gère les erreurs de paramètres
  if (str.length === 0 || !isNaN(str) === true || str.length > 1) {
    return 'error';

  } else {

    // On s'assure de travailler avec une str et on initialise newStr et le compteur pour parcourir str
    str = str.toString();
    let newStr = '';
    let count = 0;

    // Au cas où le premier caractère ne serait pas contenu dans l'alphabet    
    if (alphabet.includes(str.charAt(0))) {
        newStr += str.charAt(0).toUpperCase();
        count ++;
    }

    // On va boucler pour parcourir str
    while (count < str.length) {

      // Si un espace, un \n ou un \t est suivi d'une lettre, alors on écrit le caractère et la lettre en MAJ
      if (forUpper.includes(str.charAt(count)) && alphabet.includes(str.charAt(count + 1))) {
        newStr += str.charAt(count) + str.charAt(count + 1).toUpperCase();
        count += 2;
 
      // Sinon si le caractère est une lettre on l'écrit en MIN
      } else if (alphabet.includes(str.charAt(count))) {
        newStr += str.charAt(count).toLowerCase();
        count++;
  
      // Sinon on écrit juste le caractère
      } else {
        newStr += str.charAt(count);
        count++;
      }
    }

    // Une fois écrite complètement on return la nouvelle phrase
    return newStr;
    
  }
}


console.log(majuscule(process.argv.slice(2)));