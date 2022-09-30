function combinaisons() {

  tab = [0, 1, 2];
  i = 0;
  j = 0;
  k = 0;

  while (i <= 7) {
    j = i + 1;
    while (j <= 8) {
      k = j + 1;
      while (k <= 9) {
        tab[0] = i;
        tab[1] = j;
        tab[2] = k;
        process.stdout.write(tab[0].toString() + tab[1].toString() + tab[2].toString());
        if (i < 7) {
          process.stdout.write(', ');
        } else {
          console.log();
        }
        k++;
      }
      j++;
    }
    i++;
  }
  
}


return combinaisons();