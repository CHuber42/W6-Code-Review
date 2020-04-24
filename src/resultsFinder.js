export function processResult (USD, target, conversionArray) {
  return USD * (conversionArray[target]);
}

export function symbolTranslation (currency) {
  switch (currency) {
  case "USD" :
    return "$";
  case "AED" : 
    return "د.إ";
  case "ARS" : 
    return "ARS";
  case "AUD" : 
    return "$";
  case "BGN" : 
    return "лв";
  case "BRL" : 
    return "R$";
  case "BSD" : 
    return "BSD";
  case "CAD" : 
    return "$";
  case "CHF" : 
    return "CHF";
  case "CLP" : 
    return "$";
  case "CNY" : 
    return "¥";
  case "COP" : 
    return "$";
  case "CZK" : 
    return "Kč";
  case "DKK" : 
    return "kr";
  case "DOP" : 
    return "DOP";
  case "EGP" : 
    return "EGP";
  case "EUR" : 
    return "€";
  case"FJD" : 
    return "FJD";
  case "GBP" : 
    return "£";
  case "GTQ" : 
    return "GTQ";
  case "HKD" : 
    return "HK$";
  case "HRK" : 
    return "kn";
  case "HUF" : 
    return "ft";
  case "IDR" : 
    return "Rp";
  case "ILS" : 
    return "₪";
  case "INR" : 
    return "₹";
  case "ISK" : 
    return "ISK";
  case "JPY" : 
    return "¥";
  case "KRW" : 
    return "₩";
  case "KZT" : 
    return "KZT";
  case "MXN" : 
    return "$";
  case "MYR" : 
    return "RM";
  case "NOK" : 
    return "kr";
  case "NZD" : 
    return "$";
  case "PAB" : 
    return "PAB";
  case "PEN" : 
    return "$/";
  case "PHP" : 
    return "₱";
  case "PKR" : 
    return "Rs";
  case "PLN" : 
    return "zł";
  case "PYG" : 
    return "PYG";
  case "RON" : 
    return "Lei";
  case "RUB" : 
    return "₽";
  case "SAR" : 
    return "SAR";
  case "SEK" : 
    return "kr";
  case "SGD" : 
    return "$";
  case "THB" : 
    return "฿";
  case "TRY" : 
    return "₺";
  case "TWD" : 
    return "TWD";
  case "UAH" : 
    return "₴";
  case "UYU" : 
    return "UYU";
  case "ZAR" : 
    return "R";
  }
}