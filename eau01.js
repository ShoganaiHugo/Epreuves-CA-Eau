function combinaisons2() {

  // A modifier
  for (let i = 0; i <= 99; i++) {
    for (let j = i + 1; j <= 99; j++) {
      if (i < 10 && j < 10) {
        process.stdout.write('0' + i.toString() + ' ' + '0' + j.toString() + ', ');
      } else if (i < 10 && j >= 10) {
        process.stdout.write('0' + i.toString() + ' ' + j.toString() + ', ');
      } else if (i >= 10 && j < 10) {
        process.stdout.write(i.toString() + ' ' + '0' + j.toString() + ', ');
      } else if (i >= 10 && j >= 10) {
        process.stdout.write(i.toString() + ' ' + j.toString() + ', ');
      }
    }
  }
  
  console.log();
}


return combinaisons2();