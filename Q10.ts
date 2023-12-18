function calculatebill(units: number) {
  let billamount = 0;
  if (units > 500) {
    billamount = units * 5.5 * 1.25;
  }
  if (units > 200) {
    billamount = units * 5.5 * 1.15;
  }
  if (units > 100) {
    billamount = units * 5.5 * 1.1;
  }
  return billamount;
}
console.log(`${calculatebill(500)}`);
