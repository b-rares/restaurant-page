const createAboutUs = () => {
  const content = document.getElementById(`content`);
  const divContainer = document.createElement(`div`);
  divContainer.id = `about-container`;
  divContainer.classList = `clear`;
  const createHeader = () => {
    const div = document.createElement(`div`);
    div.id = `div-header`;
    const h1 = document.createElement(`h1`);
    h1.innerHTML = `DESPRE NOI`;
    const p = document.createElement(`p`);
    p.innerHTML = `aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas`;
    p.id = `p-header`;
    div.append(h1);
    div.append(p);
    divContainer.append(div);
  };

  const createAbout = () => {
    const div = document.createElement(`div`);
    div.id = `div-under-container`;
    const h1 = document.createElement(`h1`);
    h1.innerHTML = `Combo's Shaormas`;
    div.append(h1);
    const insideDiv = document.createElement(`div`);
    insideDiv.id = `inside-div`;
    const textDiv = document.createElement(`div`);
    textDiv.id = `inside-text-div`;
    const p = document.createElement(`p`);
    p.innerHTML = `sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas dui id ornare arcu odio ut sem nulla`;
    p.id = `float-left`;
    textDiv.append(p);
    const imgDiv = document.createElement(`div`);
    imgDiv.id = `inside-img-div`;
    const img = document.createElement(`img`);
    img.src = `https://10619-2.s.cdn12.com/rests/original/104_384281033.jpg`;
    img.id = `float-right`;
    imgDiv.append(img);
    insideDiv.append(textDiv);
    insideDiv.append(imgDiv);
    div.append(insideDiv);
    divContainer.append(div);
  };
  const appendFinal = () => {
    content.append(divContainer);
  };
  const init = () => {
    createHeader();
    createAbout();
    console.log(`started`);
    appendFinal();
  };

  init();
};

export default createAboutUs;
