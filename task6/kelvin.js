//the value of kelvin will stay constant
const kelvin=0;
//celsius is similar to Kelvin the only difference is that Celsius is 273 degrees less than Kelvin.
 let celsius=kelvin-273;
//to calculate Fahrenheit,we will use this equation:fahrenheit= Celsius * (9/5) + 32
let fahrenheit=celsius*(9/5)+32;
//then we will round it using math.floor()
  fahrenheit=Math.floor(fahrenheit);
// we display the value of fahrenheit 
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// 0 Kelvin in Fahrenheit is -460
//Convert celsius to the Newton scale using the equation below
let Newton = celsius * (33/100);
//we round the newton temperarure:
Newton=Math.floor(Newton);
//we display the value of newton
console.log(`The temperature is ${Newton} degrees newton.`);