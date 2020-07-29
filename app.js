/** @format */

//============
//Get DOM Strings
//=============
let humanCompareForm = document.querySelector("#dino-compare");
let name = document.querySelector("#name");
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let diet = document.querySelector("#diet");
let btn = document.querySelector(".btn");
let dinoContainer = document.querySelector(".dino_container");

//=============
//Dino Constructor
//=============
function Dino(species, weight, height, diet, where, when, fact) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.wwhere = where;
  this.when = when;
  this.fact = fact;
  this.image = `./images/${species.toLowerCase()}.png`;
}

//===============
//Dino controller for fetching and creating dino objects
//===============
const DinoController = (async function () {
  //Fetch Json data
  let data = await fetch("./dino.json");
  let dinoDataFetched = await data.json();
  let dinosData = [];
  dinoDataFetched.Dinos.forEach((dino) => {
    //create instant of dino object
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

//=====================
//UI Controller for getting
//=====================
const UIController = (async function (DinoCtrl) {
  try {
    //Get the Dino data from dino controller
    const dinoData = await DinoCtrl;
    let html = "";
    dinoData.forEach((data) => {
      html += `<div id='child1'>
    <h2>${data.species}</h2>
    <p>${data.fact}</p>
    <p>${data.diet}</p>
    <img class='dino_image' src='${data.image}'/>
    </div>`;
    });
    return html;
  } catch (error) {
    console.log(error);
  }
})(DinoController);

//=====================
//App controller where the app events occures
//====================
const appController = (async function (UIController) {
  try {
    //Get the dino html to be displayed
    const data = await UIController;
    //Form button event Listeners
    btn.addEventListener("click", function () {
      //Hide the form
      humanCompareForm.style.display = "none";
      //Append the html
      dinoContainer.innerHTML = data;
    });
  } catch (error) {
    console.log(error);
  }
})(UIController);
