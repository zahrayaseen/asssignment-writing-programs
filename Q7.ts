function divisibleornot(number: number) {
  let number_ = 87;
  if (number_ % 3 == 0) {
    console.log("this number is divided by 3");
  }
  if (number_ % 5 == 0) {
    console.log("this number is divided by 5");
  }
  if (number_ % 3 == 0 && number_ % 5 == 0) {
    console.log("this number is divisible by both 3, 5");
  }
  if (number_ % 5 != 0) {
    console.log("this number is not divide by 5");
  }
  if (number_ % 3 != 0) {
    console.log("this numbe vis not divided by 3");
  }
  if (number_ % 3 != 0 && number_ % 5 != 0) {
    console.log("this number is not divide by 3,5");
  }
}

divisibleornot(35);
