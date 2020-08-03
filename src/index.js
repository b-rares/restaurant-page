import homeFunction from "./homepage-module.js";
import aboutFunction from "./aboutus-module.js";
import meniuFunction from "./meniu-module.js";

homeFunction();

const getElements = () => {
  let acasa = document.getElementById(`data-index-0`);
  let despre = document.getElementById(`data-index-1`);
  let meniu = document.getElementById(`data-index-2`);

  acasa.addEventListener(`click`, getHome);
  despre.addEventListener(`click`, getAbout);
  meniu.addEventListener(`click`, getMeniu);
};

const getMeniu = () => {
  const p = document.getElementById(`cei-mai-buni`);
  const background = document.getElementById(`background-container`);
  background.id = `darken`;
  p.remove();
  const meniuContainer = document.getElementById(`meniu-container`);
  meniuFunction();
  getElements();
};

const getAbout = () => {
  const p = document.getElementById(`cei-mai-buni`);
  const background = document.getElementById(`background-container`);
  background.id = `darken`;
  p.remove();
  aboutFunction();
  getElements();
};

const getHome = () => {
  const content = document.getElementById(`content`);
  [...content.children].forEach((element) => {
    element.remove();
  });
  console.log(`hitttdsad`);
  homeFunction();
  getElements();
};

getElements();
