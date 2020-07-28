/** @format */

/**
 * @param desc {getting DOM Strings}
 */
const DOMStrings = (function () {
  let humanCompareForm = document.querySelector("#dino-compare");
  let name = document.querySelector("#name");
  let height = document.querySelector("#height");
  let weight = document.querySelector("#weight");
  let diet = document.querySelector("#diet");
  let dinoContainer = document.querySelector(".dino_container");
  return {
    humanCompareForm,
    name,
    height,
    weight,
    diet,
    dinoContainer,
  };
})();

/**
@param desc {Dino Constructor}
 */
function Dino(species, weight, height, diet, where, when, fact) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.wwhere = where;
  this.when = when;
  this.fact = fact;
}

/**
@param desc {Creating Dino objects}
 */

const DinoController = (async function () {
  //Fetch Json data
  let data = await fetch("./dino.json");
  let dinoDataFetched = await data.json();
  let dinosData = [];
  dinoDataFetched.Dinos.forEach((dino) => {
    let newDinoObj = new Dino(
      dino.species,
      dino.weight,
      dino.height,
      dino.diet,
      dino.where,
      dino.when,
      dino.fact
    );
    dinosData.push(newDinoObj);
    return newDinoObj;
  });
  return dinosData;
})();

// Create Human Object
function HumanData(name, height, weight, diet) {
  this.name = name;
  this.height = height;
  this.weight = weight;
  this.diet = diet;
}

// Use IIFE to get human data from form
const HumanDataController = function (UICtrl) {};
// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen

// On button click, prepare and display infographic

/**
 * @param desc {UI Controller}
 */
const UIController = (async function (DinoCtrl, DOMStr) {
  //get the dinoContainer DOM
  let dinoContainer = DOMStr.dinoContainer;
  const dinoData = await DinoCtrl;
  let html = "";
  dinoData.forEach((data) => {
    html += `<div id='child1'>
    <h2>${data.species}</h2>
    <p>${data.fact}</p>
    <p>${data.diet}</p>
    </div>`;
  });
  //append to DOM
  dinoContainer.innerHTML = html;
})(DinoController, DOMStrings);
