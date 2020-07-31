let createHomePage = (() => {
  const content = document.getElementById(`content`);
  const createNav = () => {
    const div = document.createElement(`div`);
    div.id = `nav-bar`;
    content.append(div);
  };
  const createBackground = () => {
    const div = document.createElement(`div`);
    div.id = `background-container`;
    const img = document.createElement(`img`);
    img.src = `https://tv8.md/wp-content/uploads/2017/12/kebab.jpg`;
    div.append(img);
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
    home.innerHTML = `Acasa`;
    const despre = document.getElementById(`data-index-1`);
    despre.innerHTML = `Despre`;
    const meniu = document.getElementById(`data-index-2`);
    meniu.innerHTML = `Meniu`;
    const contact = document.getElementById(`data-index-3`);
    contact.innerHTML = `Contact`;
    const facebook = document.getElementById(`data-index-4`);
    facebook.append(`<i class="fab fa-facebook-square"></i>`);
    facebook.href = `https://www.facebook.com/`;
    const instagram = document.getElementById(`data-index-5`);
    instagram.append(`<i class="fab fa-instagram"></i>`);
    instagram.href = `https://www.instagram.com/`;
  };
  const init = () => {
    createNav();
    createBackground();
    createLinks();
  };

  init();
})();

export default createHomePage();
