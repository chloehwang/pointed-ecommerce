import './modules'

//helper function
export const selectElements = (selector) => {
  let elements = [].slice.call(document.getElementsByClassName(selector));
  return elements.length === 1 ? elements[0] : elements;
};

export default class StickyNav {
  constructor(el) {
    this.el = el;
    this.setVars();
    this.bindEvents();
  }

  setVars() {
    this.map = {};
    this.activeLink;
    this.sections = selectElements('opportunity').reverse();

    const cacheDetails = (section) => {
      let id = '#' + section.getAttribute('id');
      let link = this.el.querySelector(`a[href='${id}']`);
      let offsetTop = section.offsetTop;

      this.map[id] = {id, link, offsetTop};
    }

    //cache all sections and their associated nav links
    this.sections.forEach(cacheDetails);
  }

  bindEvents() {
    //still need to debounce this
    window.addEventListener('scroll', this.calculateActiveSection.bind(this));
  }

  calculateActiveSection() {
    let windowTop = window.scrollY;

    //loop through cached map
    for (let key in this.map) {
      let section = this.map[key];
      let isAtTop = windowTop > section.offsetTop;

      //if we've scrolled into a new section, turn off the currently active link and set a new active link
      if (isAtTop) {
        this.turnOffCurrentlyActive();
        this.activeLink = section.link;
        this.activeLink.classList.add('-active');
        break;
      }
      else {
        this.turnOffCurrentlyActive();
      }
    }

  }

  turnOffCurrentlyActive() {
    if (this.activeLink) {
      this.activeLink.classList.remove('-active');
    }
  }
}

//call the StickyNav module
new StickyNav(selectElements('sticky-nav'));





