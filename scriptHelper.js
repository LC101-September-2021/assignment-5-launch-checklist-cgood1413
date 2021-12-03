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
const validateInput = (objArr) => {

    const mappedValues = objArr.map((obj) => {
      if (obj.value === "") {
        return "Empty";
      } else if (isNaN(obj.value)) {
        return "Not a Number";
      } else {
        return "Is a Number";
      }
    });
    return mappedValues;

};


// I'm not sure if this array of objs is what I want to keep for the entire assignment. But at first impressions it seems useful since I want to do specific things and retrieve specific information about each type of input, but ¯\_(ツ)_/¯
const formSubmission = (document, list, pilot, copilot, fuelLevel, cargoLevel) => {

    const valueObjs = [
      pilotObj = {
        value: pilot.value.trim(),
        defaultType: "Not a Number",
      },
      copilotObj = {
        value: copilot.value.trim(),
        defaultType: "Not a Number",
      },
      fuelObj = {
        value: fuelLevel.value.trim(),
        defaultType: "Is a Number",
      },
      cargoObj = {
        value: cargoLevel.value.trim(),
        defaultType: "Is a Number",
      },
    ];

    const validatedValues = validateInput(valueObjs);
    if (validatedValues.includes("Empty")){
        alert("All fields are required");
    };
    
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
