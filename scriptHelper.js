
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

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    const launchStatus = document.getElementById("launchStatus");
    const pilotStatus = document.getElementById("pilotStatus")
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    
    pilotStatus.innerText = `${pilot} is ready for launch`;
    copilotStatus.innerText = `${copilot} is ready for launch`;
    if (fuelLevel < 10000) {
        launchStatus.style.color = "rgb(199, 37, 78)";
        launchStatus.innerText = "Shuttle Not Ready for Launch";
        fuelStatus.innerText = `Fuel level too low for launch`;
        list.style.visibility = "visible";
    }
    if (cargoLevel > 10000) {
        launchStatus.style.color = "rgb(199, 37, 78)";
        launchStatus.innerText = "Shuttle Not Ready for Launch";
        cargoStatus.innerText = `Cargo mass too heavy for launch`;
        list.style.visibility = "visible";
    }
    if (fuelLevel >= 10000 && cargoLevel <= 10000){
        launchStatus.style.color = "rgb(65, 159, 106)";
        launchStatus.innerText = "Shuttle is Ready for Launch";
        list.style.visibility = "visible";
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
