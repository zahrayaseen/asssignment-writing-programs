//let celsiusscale = 273;
//let farenheitscale: number = 1.8 * celsiusscale + 32;
//console.log(`${farenheitscale}`);

function celsiustofarenheit(celsius: number): number {
  return (9 / 5) * farenheit + 32;
}
function farenheittocelsius(farenheit: number): number {
  return (5 / 9) * celsius - 32;
}

const celsius = 45;
const farenheit = 63;

console.log(`${farenheittocelsius(celsius)},${celsiustofarenheit(celsius)}`);
