function age_(age: number) {
  let age_ = 19;
  if (age_ >= 0 && age_ <= 12) {
    console.log("child");
  } else if (age_ >= 13 && age_ <= 19) {
    console.log("teenager");
  } else {
    console.log("adult");
  }
}
age_(12);
