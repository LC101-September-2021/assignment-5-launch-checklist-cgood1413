
const init = () => {

    const document = window.document;
    const form = document.querySelector("form")
    const faultyList = document.querySelector("div[id=faultyItems]");
    const pilotInput = document.querySelector("input[name=pilotName]");
    const copilotInput = document.querySelector("input[name=copilotName]");
    const fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    const cargoLevelInput = document.querySelector("input[name=cargoMass]");
    
    faultyList.style.visibility = "hidden";

    form.addEventListener("submit", (event) => {

        const pilotValue = pilotInput.value.trim();
        const copilotValue = copilotInput.value.trim();
        const fuelValue = fuelLevelInput.value.trim();
        const cargoValue = cargoLevelInput.value.trim();
        const defaultValues = ["Not a Number", "Not a Number", "Is a Number", "Is a Number"];
        const values = [pilotValue, copilotValue, fuelValue, cargoValue];
        const validatedValues = values.map(validateInput);
        const isCorrect = validatedValues.every((element, index) => {
            return element === defaultValues[index];
        });

        event.preventDefault();
        if (validatedValues.includes("Empty")) {
            alert("All fields are required.");
            event.preventDefault();
        } else if (!isCorrect) {
            alert("Invalid input, please review responses and resubmit.");
            event.preventDefault();
        } else {
            formSubmission(document, faultyList, pilotValue, copilotValue, fuelValue, cargoValue);
        }
        
    });
    
    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
    }).then(function () {
        const {name, diameter, star, distance, moons, image} = pickPlanet(listedPlanets);
        addDestinationInfo(document, name, diameter, star, distance, moons, image);
    })

}

window.addEventListener("load", init);