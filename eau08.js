const numbers = '0123456789';

function numOnly(str) {
  // On gère les erreurs de paramètres
  if (str.length === 0 || str.length > 1) {
    return 'error';
  } else {

    // return !isNaN(str);

    str = str.toString();
    let count = 0;

    while (count < str.length) {
      if (numbers.includes(str.charAt(count))) {
        count++;
      } else {
        return false;
      }
    }

    return true;
  }
}


console.log(numOnly(process.argv.slice(2)));