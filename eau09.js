function numOnly(str) {
  // On gère les erreurs de paramètres
  if (str.length !== 2 || !isNaN(str) === true) {
    console.log('error');

  } else {

    // Si str0 < str1
    if (str[0] < str[1]) {
      var count = str[0];
      while (count < str[1]) {
        process.stdout.write(count + ' ');
        count++;
      }

    // Si str1 < str0
    } else if (str[1] < str[0]) {
      var count = str[1];
      while (count < str[0]) {
        process.stdout.write(count + ' ');
        count++;
      }

    // Si str0 === str1  
    } else {
      process.stdout.write(count);
    }

    // Retour à la ligne
    console.log();
  }
}


return numOnly(process.argv.slice(2));