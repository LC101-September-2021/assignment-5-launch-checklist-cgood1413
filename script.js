const init = () => {

    const form = document.querySelector("form")
    const faultyList = document.querySelector("div[id=faultyItems]");
    const pilotInput = document.querySelector("input[name=pilotName]");
    const copilotInput = document.querySelector("input[name=copilotName]");
    const fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    const cargoLevelInput = document.querySelector("input[name=cargoMass]");
    
    
    //This is where I'm running into issues getting my files to cooperate. So far if I include everything under init() it works fine (more or less) but otherwise it's not much use
    form.addEventListener("submit", (event) => {
        
        event.preventDefault();
        formSubmission(document, faultyList, pilotInput, copilotInput, fuelLevelInput, cargoLevelInput);

    });

    // const formSubmission = (document, list, pilot, copilot, fuelLevel, cargoLevel) => {

    //     const valueObjs = [
    //       pilotObj = {
    //         value: pilot.value.trim(),
    //         defaultType: "Not a Number",
    //       },
    //       copilotObj = {
    //         value: copilot.value.trim(),
    //         defaultType: "Not a Number",
    //       },
    //       fuelObj = {
    //         value: fuelLevel.value.trim(),
    //         defaultType: "Is a Number",
    //       },
    //       cargoObj = {
    //         value: cargoLevel.value.trim(),
    //         defaultType: "Is a Number",
    //       },
    //     ];

    //     const validatedValues = validateInput(valueObjs);
    //     if (validatedValues.includes("Empty")){
    //         alert("All fields are required");
    //     };
        
    // };

    // const validateInput = (objArr) => {

    //     const mappedValues = objArr.map((obj) => {
    //       if (obj.value === "") {
    //         return "Empty";
    //       } else if (isNaN(obj.value)) {
    //         return "Not a Number";
    //       } else {
    //         return "Is a Number";
    //       }
    //     });
    //     return mappedValues;

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