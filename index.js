function bmiCalculator(weight, height) {
  var bmi = weight / (height * height);
  return Math.floor(bmi);
}

var b = bmiCalculator(65, 1.8);
console.log(b);
