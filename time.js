function convertTo24Hour(time) {
  var hours = parseInt(time.substr(0, 2));
  if (time.indexOf('am') != -1 && hours == 12) {
    time = time.replace('12', '0');
  }
  if (time.indexOf('pm') != -1 && hours < 12) {
    time = time.replace(hours, (hours + 12));
  }
  return time.replace(/(am|pm)/, '');
}


//convertTo24Hour('13:12am') ///"1:12"
//convertTo24Hour('10:12pm') ///"22:12"

//Date.UTC(96, 1, 2, 3, 4, 5) ///823230245000

//new Date(823230245000) ///Thu Feb 01 1996 20: 04: 05 GMT - 0700(MST)

