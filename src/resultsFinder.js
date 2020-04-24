export function processResult (USD, target, conversionArray) {
  return USD * (conversionArray[target]);
}