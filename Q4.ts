function discountofproduct(discount: number = 0) {
  let price = 34;
  discount = 10;
  if (price > 100) {
    console.log(10 % discount);
    let formula = (discount / price) * 100;
    console.log(formula);
  } else if (price < 100) {
    console.log(5 % discount);
  }
}
discountofproduct(34);
