let createHomePage = () => {
  const content = document.getElementById(`content`);
  const createNav = () => {
    const div = document.createElement(`div`);
    div.id = `nav-bar`;
    content.append(div);
  };
  const createBackground = () => {
    const div = document.createElement(`div`);
    div.id = `background-container`;
    const p = document.createElement(`p`);
    const img = document.createElement(`img`);
    img.src = `https://tv8.md/wp-content/uploads/2017/12/kebab.jpg`;
    img.id = `img-background`;
    div.append(img);
    p.innerHTML = `CEA MAI BUNA SHAORMA DIN UNIVERS O GASESTI LA NOI! `;
    p.id = `cei-mai-buni`;
    div.append(p);
    content.append(div);
  };
  const createLinks = () => {
    let count = 0;
    for (let i = 0; i < 6; i++) {
      const div = document.createElement(`div`);
      div.classList = `a-container`;
      const a = document.createElement(`a`);
      a.id = `data-index-${count}`;
      div.append(a);
      content.firstChild.append(div);
      count++;
    }
    createInnerHTML();
  };
  const createInnerHTML = () => {
    const home = document.getElementById(`data-index-0`);
    home.innerHTML = `ACASA`;
    const despre = document.getElementById(`data-index-1`);
    despre.innerHTML = `DESPRE`;
    const meniu = document.getElementById(`data-index-2`);
    meniu.innerHTML = `MENIU`;
    const instagram = document.getElementById(`data-index-4`);
    instagram.target = `_blank`;
    const instagramImg = document.createElement(`img`);
    instagramImg.src = `https://www.instagram.com/favicon.ico`;
    instagram.href = `https://www.instagram.com/`;
    instagram.append(instagramImg);
    const facebook = document.getElementById(`data-index-5`);
    facebook.target = `_blank`;
    const facebookImg = document.createElement(`img`);
    facebookImg.src = `https://icons.iconarchive.com/icons/danleech/simple/32/facebook-icon.png`;
    facebook.href = `https://www.facebook.com/`;
    facebook.append(facebookImg);
  };
  const init = () => {
    createNav();
    createBackground();
    createLinks();
  };

  init();
};

export default createHomePage;
