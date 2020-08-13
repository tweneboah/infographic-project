//Get DOM Strings
const dinoCompare = document.querySelector("#dino-compare");
const btn = document.querySelector("#btn");
const dinoDOMString = document.querySelector(".grid-item");
const grid = document.querySelector("#grid");

/**
 * @constructor Dino Constructor
 * @param {string} species - The species of the Dino
 * @param {sting} image - The image of the Dion
 * @param {string} fact - The fact of the Dino
 * @param {string} weight - The weight of the Dino
 * @param {string} height - The height of the Dino
 */

function Dino(species, image, fact, weight, height) {
  this.species = species;
  this.image = image;
  this.fact = fact;
  this.weight = weight;
  this.height = height;
}

/**
 * @description fetch Dino data from json file and use Dino constructor to create Dino objects
 * @returns {Array} Dino array
 */
const fetchDino = (() => {
  const getDinoData = async () => {
    const data = await fetch("./dino.json");
    const results = await data.json();
    const dinos = await results.Dinos.map((data) => {
      const { species, weight, height, diet, fact, image } = data;
      const dinoObj = new Dino(species, image, fact, weight, height);
      return dinoObj;
    });
    return dinos;
  };
  return {
    res: getDinoData,
  };
})();

/**
 * @constructor  Human Constructor
 * @param {string} species - The name of the Human
 * @param {number} humanHeight - The height Human
 * @param {number} humanWeight - The weight of the Human
 * @param {string} humanDiet - The diet of the Human
 */
function Human(species, humanHeight, humanWeight, humanDiet) {
  this.species = species;
  this.humanHeight = humanHeight;
  this.humanWeight = humanWeight;
  this.humanDiet = humanDiet;
}

/**
 * @description Create human data from the form
 * @return {object}  Human data from the form
 */
const getHumanData = (function () {
  return {
    nameValue: document.querySelector("#name"),
    weightValue: document.querySelector("#weight"),
    heightValue: document.querySelector("#height"),
    humanDietValue: document.querySelector("#diet"),
  };
})();

/**
 * @description Create human object using the human constructor
 * @return {object}  created human object
 */
function createHumanObj() {
  const humanHeight = getHumanData.heightValue.value;
  const humanName = getHumanData.nameValue.value;
  const humanWeight = getHumanData.weightValue.value;
  const humanDiet = getHumanData.humanDietValue.value;
  const humanObj = new Human(humanName, humanHeight, humanWeight, humanDiet);
  return {
    humanObj,
  };
}

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
function checkWeight(dinoObj, humanObj) {}

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
function checkHeight(dinoObj, humanObj) {}

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
function typeOfDiet(dinoObj, humanObj) {}

/**
 * @description Add tiles to the DOM
 * @return {object}  Human data from the form
 */
async function addTtiles() {
  //Get human data
  const humanData = createHumanObj();
  const dino = await fetchDino.res();
  const results = dino
    .slice(0, 4)
    .concat(humanData.humanObj)
    .concat(dino.slice(4, 8));
  results.forEach((data) => {
    const { species, fact, image, weight } = data;
    grid.innerHTML += `
      <div class="grid-item">
          <h3>${species}</h3>
          <img src="${image ? image : ""}" alt="" />
          <p>${fact ? fact : ""}</p>
        </div>
    `;
  });
}

/**
 * @description Remove form from the DOM
 */
function removeForm() {
  dinoCompare.style.display = "none";
}

/**
 * @description On button click, prepare and display infographic
 */
btn.addEventListener("click", async (e) => {
  addTtiles();
  removeForm();
});
