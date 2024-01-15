//we create a varibale and set it equal to my age as number
let myAge=21;
//Create a variable named earlyYears and save the value 2 to it
let earlyYears=2;
//Use the multiplication assignment operator to multiply the value saved to earlyYears by 10.5 and reassign it to earlyYears
earlyYears*=10.5;
//Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it,Set the result equal to a variable called laterYears. We’ll be changing this value later.
 let laterYears=myAge-2;
//Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. Use the multiplication assignment operator to multiply and assign in one step.
 laterYears*=4
 console.log(`the earlyYears are:${earlyYears}`);
 console.log(`the laterYears are:${laterYears}`);
 //yes they are the values expected
 //Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears
 let myAgeInDogYears=earlyYears+laterYears;
 //Let's use a string method next.Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName
 let myName='HIND'.toLowerCase();
 //Write a console.log statement that displays your name and age in dog years. Use string interpolation to display the value in the following sentence:
 console.log(`My name is ${myName}. I am ${myAge}  years old in human years which is ${myAgeInDogYears} years old in dog years.`)

