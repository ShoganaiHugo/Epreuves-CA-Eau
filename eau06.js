// On donne une base d'alphabet pour tester plus tard si un caractère est une lettre
let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function majSurDeux(str) {
  // On gère les erreurs de paramètres
  if (str.length === 0 || !isNaN(str) === true || str.length > 1) {
    return 'error';

  } else {

    // On s'assure de manipuler une str et on défini un compteur pair impair et la newStr dans laquelle on va écrire le résultat
    str = str.toString();
    let newStr = '';
    let count = 1;

    // On va parcourir str pour en copier le contenu
    for (let i = 0; i < str.length; i++) {

      // Si c'est impair --> Majuscule
      if (count % 2 !== 0) {
        if (alphabet.includes(str.charAt(i))) {
          newStr += str.charAt(i).toUpperCase();
          count++;
        } else {
          newStr += str.charAt(i);
        }

      // Si c'est pair --> Minuscule  
      } else {
        if (alphabet.includes(str.charAt(i))) {
          newStr += str.charAt(i).toLowerCase();
          count++;
        } else {
          newStr += str.charAt(i);
        }
      }
      
    }

    // On affiche newStr une fois qu'on a fini de l'écrire
    return newStr;
  }
}


console.log(majSurDeux(process.argv.slice(2)));