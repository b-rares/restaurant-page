const meniuFunction = () => {
  const content = document.getElementById(`content`);
  const meniuContainer = document.createElement(`div`);
  meniuContainer.id = `meniu-container`;
  const createHeader = () => {
    const div = document.createElement(`div`);
    div.id = `div-header div-meniu`;
    const h1 = document.createElement(`h1`);
    h1.innerHTML = `MENIUL NOSTRU`;
    h1.id = `meniul-nostru`;
    div.appendChild(h1);
    meniuContainer.appendChild(div);
  };
  const createMeniu = () => {
    const div = document.createElement(`div`);
    div.id = `div-meniu-inner`;
    let count = 0;
    for (let i = 0; i < 5; i++) {
      const img = document.createElement(`img`);
      img.classList = `meniu-img`;
      img.src = `https://pizzashaormaland.ro/wp-content/uploads/2018/12/SHAORMA-MARE.jpg`;
      const divInner = document.createElement(`div`);
      divInner.id = `data-index-${count}`;
      divInner.classList = `food-container`;
      count++;
      const text = document.createElement(`p`);
      text.innerHTML = `carne 35%, cartofi, rosii, ceapa, tzatziki, pita greceasca`;
      const h1 = document.createElement(`h1`);
      h1.innerHTML = `PITA GRECEASCA CU PORC MICA`;
      divInner.append(h1);
      divInner.appendChild(text);
      divInner.appendChild(img);
      meniuContainer.appendChild(divInner);
    }
  };
  const init = () => {
    createHeader();
    createMeniu();
  };
  init();
  content.appendChild(meniuContainer);
};

export default meniuFunction;
