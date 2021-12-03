const init = () => {

    const form = document.querySelector("form")
    const faultyList = document.querySelector("div[id=faultyItems]");
    const pilotInput = document.querySelector("input[name=pilotName]");
    const copilotInput = document.querySelector("input[name=copilotName]");
    const fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    const cargoLevelInput = document.querySelector("input[name=cargoMass]");
    
    
    //This is where I'm running into issues getting my files to cooperate. So far if I include the functions under init() it works fine (more or less) but otherwise it's not much use
    form.addEventListener("submit", (event) => {
        
        event.preventDefault();
        formSubmission(document, faultyList, pilotInput, copilotInput, fuelLevelInput, cargoLevelInput);

    });

    // const formSubmission = (document, list, pilot, copilot, fuelLevel, cargoLevel) => {

    //     const pilotValue = pilot.value.trim();
    //     const copilotValue = copilot.value.trim();
    //     const fuelValue = fuelLevel.value.trim();
    //     const cargoValue = cargoLevel.value.trim();
    //     const defaultValues = ["Not a Number", "Not a Number", "Is a Number", "Is a Number"];
    //     const values = [pilotValue, copilotValue, fuelValue, cargoValue];
    //     const validatedValues = values.map(validateInput);

    //     // const isCorrect = validatedValues.every((element, index) => {
    //     //     element === defaultValues[index];
    //     // })
        
    //     if (validatedValues.includes("Empty")) {
    //       alert("All fields are required.");
    //     } else {
    //         console.log(validatedValues[0] === defaultValues[0]);
    //     }
    
    // };

    // const validateInput = (str) => {

    //     if (str === ""){
    //         return "Empty";
    //     } else if (isNaN(str)){
    //         return "Not a Number";
    //     } else {
    //         return "Is a Number";
    //     }

    // };

    // const isCorrectType = (inputArr, defaultArr) => {

    // };
    
    // let listedPlanets;
    // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    // })

}

window.addEventListener("load", init);