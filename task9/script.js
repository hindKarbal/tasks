// Provided code for generating a random race number
let raceNumber = Math.floor(Math.random() * 1000);

// Variable indicating whether a runner registered early
let registeredEarly = true; // Change to false if the runner registered late

// Variable for the runner's age
let runnerAge = 21; // Change the age as needed

// Check if the runner is an adult AND registered early
if (runnerAge > 18 && registeredEarly) {
    raceNumber += 1000; // Early adults receive a race number at or above 1000
}

// Control flow statement to determine race time
if (runnerAge > 18) {
    // For runners over 18
    if (registeredEarly) {
        // Early adults run at 9:30 am
        console.log(`You will race at 9:30 am. Your race number is ${raceNumber}.`);
    } else {
        // Late adults run at 11:00 am
        console.log(`You will race at 11:00 am. Your race number is ${raceNumber}.`);
    }
} else if (runnerAge < 18) {
    // Youth registrants run at 12:30 pm
    console.log(`Youth runners will race at 12:30 pm. Your race number is ${raceNumber}.`);
} else {
    // Runners exactly 18 years old
    console.log("See the registration desk for further assistance.");
}
