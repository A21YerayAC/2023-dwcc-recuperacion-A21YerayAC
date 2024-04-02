const flightsInfo = '_Delayed_Departure;scq93766109;bio2133758440;11:25';

function infoVoo(flightsInfo) {
  array = flightsInfo.split(';');
  array[0] = array[0].replaceAll('_', ' ').trim();
  array[1] = array[1].slice(0, 3).toUpperCase();
  array[2] = array[2].slice(0, 3).toUpperCase();
  array[3] = '(' + array[3].replace(':', 'h') + ')';

  return array.join(' ');
}

console.log(infoVoo(flightsInfo)); // 'Delayed Departure SCQ BIO (11h25)'
