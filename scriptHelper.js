// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}


//I'm struggling with fulfilling the assignment guidelines while still getting the expected outcome. Honestly there are other ways I'd do this if given the chance to do it from the bottom-up, but I know that's not the point of this assignment.   
const validateInput = (str) => {

    if (str === ""){
        return "Empty";
    } else if (isNaN(str)){
        return "Not a Number";
    } else {
        return "Is a Number";
    }

};



const formSubmission = (document, list, pilot, copilot, fuelLevel, cargoLevel) => {

    const pilotValue = pilot.value.trim();
    const copilotValue = copilot.value.trim();
    const fuelValue = fuelLevel.value.trim();
    const cargoValue = cargoLevel.value.trim();
    const defaultValues = ["Not a Number", "Not a Number", "Is a Number", "Is a Number"];
    const values = [pilotValue, copilotValue, fuelValue, cargoValue];
    const validatedValues = values.map(validateInput);

    // const isCorrect = validatedValues.every((element, index) => {
    //     element === defaultValues[index];
    // })
    
    if (validatedValues.includes("Empty")) {
      alert("All fields are required.");
    } else { // After I make sure that the inputs aren't empty, obvi the next step is to ensure they are the correct type. So far I'm trying to compare two arrays, and every seems like the most effective solution since I ultimately want one boolean value. However I just can't figure out the syntax for the .every expression^ to make it happen. I could write a loop, but that would require even more steps to ensure I only get one alert for the entire form (rather than for each false match) :/
        console.log(validatedValues[0] === defaultValues[0]);
    }

};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
