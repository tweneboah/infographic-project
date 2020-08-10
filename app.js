const anklyosaurusDOM = document.querySelector(".dino1");
const brachiosaurusDOM = document.querySelector(".dino2");
const elasmosaurusDOM = document.querySelector(".dino3");
const pigeonDOM = document.querySelector(".dino4");
const humanDOM = document.querySelector(".human");
const pteranodonDOM = document.querySelector(".dino5");
const stegosaurusDOM = document.querySelector(".dino6");
const triceratopsDOM = document.querySelector(".dino7");
const tyrannosaurusRexDOM = document.querySelector(".dino8");
const mainGridContainer = document.querySelector("#grid");


const dinoCompare = document.querySelector("#dino-compare");
const btn = document.querySelector("#btn");


// Create Dino Constructor
function Dino(species, image, fact, weight, height) {
  this.species = species;
  this.image = image;
  this.fact = fact;
  this.weight = weight;
  this.height = height
}


// Dinos random facts
const facts = [
  "First discovered in 1889 by Othniel Charles Marsh",
  "The largest known skull measures in at 5 feet long.",
  "Anklyosaurus survived for approximately 135 million years.",
  "An asteroid was named 9954 Brachiosaurus in 1991.",
  "Elasmosaurus was a marine reptile first discovered in Kansas.",
  "Actually a flying reptile, the Pteranodon is not a dinosaur.",
  "All birds are living dinosaurs.",
];

//Dinos random number

const anklyosaurusRandom = Math.floor(Math.random() * facts.length);
const brachiosaurusRandom = Math.floor(Math.random() * facts.length);
const elasmosaurusRandom = Math.floor(Math.random() * facts.length);
const pigeonRandom = Math.floor(Math.random() * facts.length);
const pteranodonRandom = Math.floor(Math.random() * facts.length);
const stegosaurusRandom = Math.floor(Math.random() * facts.length);
const triceratopsRandom = Math.floor(Math.random() * facts.length);
const tyrannosaurusRexRandom = Math.floor(Math.random() * facts.length);

// Create Dino Objects
const anklyosaurusObj = new Dino(
  "Anklyosaurus",
  "./images/anklyosaurus.png",
  facts[anklyosaurusRandom],
  10500,
  55,

);

const brachiosaurusObj = new Dino(
  "Brachiosaurus",
  "./images/brachiosaurus.png",
  facts[brachiosaurusRandom],
  70000,
  372,
);

const elasmosaurusObj = new Dino(
  "Elasmosaurus",
  "./images/elasmosaurus.png",
  facts[elasmosaurusRandom],
  16000,
  59,
);

const pigeonObj = new Dino(
  "Pigeon",
  "./images/pigeon.png",
  facts[pigeonRandom],
  0.5,
  9,
);

const pteranodonObj = new Dino(
  "Pteranodon",
  "./images/pteranodon.png",
  facts[pteranodonRandom],
  44,
  20,
);

const stegosaurusObj = new Dino(
  "Stegosaurus",
  "./images/stegosaurus.png",
  facts[stegosaurusRandom],
  11600,
  79,
);

const triceratopsObj = new Dino(
  "Triceratops",
  "./images/triceratops.png",
  facts[triceratopsRandom], 13000,
  114,
);

const tyrannosaurusRexObj = new Dino(
  "Tyrannosaurus Rex",
  "./images/tyrannosaurusrex.png",
  facts[tyrannosaurusRexRandom],
  11905,
  144,
);

//Human constructor

function Human(name, height, weight, diet) {
  this.name = name;
  this.height = height;
  this.weight = weight;
  this.diet = diet
}

// Use IIFE to get human data from form

const getHumanData = (function () {
  //HUMAN DOM
  const humanWeightDOM = document.querySelector("#weight");
  const humanDietDOM = document.querySelector("#diet");
  const humanNameDOM = document.querySelector("#name");
  const humanHeightDOM = document.querySelector("#height");

  function getData() {
    return {
      nameValue: humanNameDOM.value,
      weightValue: humanWeightDOM.value,
      heightValue: humanHeightDOM.value,
      humanDietValue: humanDietDOM.value

    }
  }

  return {
    getData
  }
})()

// Create Human Object
function createHumanObj() {
  const humanData = getHumanData.getData();
  const humanObj = new Human(humanData.nameValue, humanData.weightValue, humanData.heightValue, humanData.humanDietValue);
  return humanObj
}

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
function checkWeight(dinoObj, humanObj) {
  let message;
  //convert  lbs to kg;
  let dinoConvertedWeight = (dinoObj.weight * 0.453592)
  //convert humans weight to number
  let humanConvertedWeight = parseInt(humanObj.weightValue).toFixed(2)
  if (dinoConvertedWeight > humanConvertedWeight) {
    message = `This dino is ${(dinoConvertedWeight - humanConvertedWeight).toFixed(2)} old than the human`
    return message
  } else {

    message = `This human is ${humanConvertedWeight - dinoConvertedWeight  } old than the Dino`
  }
}

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
function checkHeight(dinoObj, humanObj) {

}


// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
function typeOfDiet(dinoObj, humanObj) {

}
// Generate Tiles for each Dino in Array


// Add tiles to DOM
function addTtiles() {
  //dino 1
  anklyosaurusDOM.innerHTML = `<h3>${anklyosaurusObj.species}</h3>
  <img src="${anklyosaurusObj.image}" alt="">
  <p>${anklyosaurusObj.fact}
  </p>`;

  brachiosaurusDOM.innerHTML = `<h3>${brachiosaurusObj.species}</h3>
  <img src="${brachiosaurusObj.image}" alt="">
  <p>${brachiosaurusObj.fact}
  </p>`;

  elasmosaurusDOM.innerHTML = `<h3>${elasmosaurusObj.species}</h3>
  <img src="${elasmosaurusObj.image}" alt="">
  <p>${elasmosaurusObj.fact}
  </p>`;

  anklyosaurusDOM.innerHTML = `<h3>${anklyosaurusObj.species}</h3>
  <img src="${anklyosaurusObj.image}" alt="">
  <p>${anklyosaurusObj.fact}
  </p>`;

  triceratopsDOM.innerHTML = `<h3>${triceratopsObj.species}</h3>
  <img src="${triceratopsObj.image}" alt="">
  <p>${triceratopsObj.fact}
  </p>`;

  pteranodonDOM.innerHTML = `<h3>${pteranodonObj.species}</h3>
  <img src="${pteranodonObj.image}" alt="">
  <p>${pteranodonObj.fact}
  </p>`;

  stegosaurusDOM.innerHTML = `<h3>${stegosaurusObj.species}</h3>
  <img src="${stegosaurusObj.image}" alt="">
  <p>${stegosaurusObj.fact}
  </p>`;

  pigeonDOM.innerHTML = `<h3>${pigeonObj.species}</h3>
  <img src="${pigeonObj.image}" alt="">
  <p>${stegosaurusObj.fact}
  </p>`;

  tyrannosaurusRexDOM.innerHTML = `<h3>${tyrannosaurusRexObj.species}</h3>
  <img src="${tyrannosaurusRexObj.image}" alt="">
  <p>${tyrannosaurusRexObj.fact}
  </p>`;

  //Create human object and add to the dom
  const humanData = createHumanObj()
  let res = checkWeight(tyrannosaurusRexObj, getHumanData.getData())

  humanDOM.innerHTML = `
   <h3>${humanData.name}</h3>
  <p>${res}</p>
 `
}

// Remove form from screen
function removeForm() {
  dinoCompare.style.display = "none";
}
// On button click, prepare and display infographic
btn.addEventListener("click", (e) => {
  addTtiles();
  removeForm()
  let res = checkWeight(tyrannosaurusRexObj, getHumanData.getData())
  console.log(res)

});