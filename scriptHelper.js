
require('isomorphic-fetch');

function validateInput(str) {

    if (str === ""){
        return "Empty";
    } else if (isNaN(str)){
        return "Not a Number";
    } else {
        return "Is a Number";
    }

};
// A lot of hard-coding here, I'll need to find a way to do this more programatically.
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    const launchStatus = document.getElementById("launchStatus");
    const pilotStatus = document.getElementById("pilotStatus")
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    
    list.style.visibility = "visible";
    pilotStatus.textContent = `Pilot ${pilot} is ready for launch`;
    copilotStatus.textContent = `Co-pilot ${copilot} is ready for launch`;
    if (fuelLevel < 10000) {
        launchStatus.style.color = "rgb(199, 37, 78)";
        launchStatus.textContent = "Shuttle Not Ready for Launch";
        fuelStatus.textContent = `Fuel level too low for launch`;
    }
    if (cargoLevel > 10000) {
        launchStatus.style.color = "rgb(199, 37, 78)";
        launchStatus.textContent = "Shuttle Not Ready for Launch";
        fuelStatus.textContent = `Fuel level high enough for launch`;
        cargoStatus.textContent = `Cargo mass too heavy for launch`;
    }
    if (fuelLevel >= 10000 && cargoLevel <= 10000){
        launchStatus.style.color = "rgb(65, 159, 106)";
        launchStatus.textContent = "Shuttle is Ready for Launch";
        fuelStatus.textContent = `Fuel level high enough for launch`;
        cargoStatus.textContent = `Cargo mass low enough for launch`;

    }

};

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    
    const missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
    `;

}

async function myFetch() {

    const planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json(); 
        });

    return planetsReturned;

}

function pickPlanet(planets) {

    return planets[Math.floor(Math.random()*planets.length)];

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
