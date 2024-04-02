function enmascarar(cadena) {
  censura = cadena.split('');

  for (let i = 0; i < censura.length - 4; i++) {
    censura[i] = '*';
  }
  result = censura.join('');
  return result;
}
console.log(enmascarar('1234123412347777'));
