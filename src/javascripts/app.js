import './modules'
import inViewport from 'in-viewport';

//***Helper functions***//
export const selectElements = (selector) => {
  let elements = [].slice.call(document.getElementsByClassName(selector));
  return elements.length === 1 ? elements[0] : elements;
};

export const setInViewportHandler = (section) => {
  let link = getNavLink(section);
  let watcher = inViewport(section, { container: nav, offset: -1 * navHeight }, function() {
    setActiveSection(link, watcher)
  });
}

export const getNavLink = function(section) {
  let id = '#' + section.getAttribute('id');
  return nav.querySelector(`a[href='${id}']`);
}

export const setActiveSection = function(link, watcher) {
  if (currentlyActiveLink) {
    currentlyActiveLink.classList.remove('-active');
  }

  currentlyActiveLink = link;
  currentlyActiveLink.classList.add('-active');

  //rewatch for entering viewport
  setTimeout(watcher.watch, 1000)
}


//***Variables***//
let nav = selectElements('sticky-nav');
let navHeight = nav.offsetHeight;
let sections = selectElements('opportunity');
let currentlyActiveLink;


//***Set handler for when section is inViewport***//
sections.forEach(setInViewportHandler)





//export default class StickyNav {
//   constructor(el) {
//     this.el = el;
//     this.setVars();
//     this.bindEvents();
//   }

//   setVars() {
//     this.map = {};
//     this.activeLink;
//     this.sections = selectElements('opportunity').reverse();

//     //cache all sections and their associated nav links
//     this.sections.forEach(this.cacheDetails);
//   }

//   bindEvents() {
//     //still need to debounce this
//     window.addEventListener('scroll', this.calculateActiveSection.bind(this));
//   }

//   calculateActiveSection() {
//     let windowTop = window.scrollY;

//     //loop through cached map
//     for (let key in this.map) {
//       let section = this.map[key];
//       let isAtTop = windowTop > section.offsetTop;

//       //if we've scrolled into a new section, turn off the currently active link and set a new active link
//       if (isAtTop) {
//         this.turnOffCurrentlyActive();
//         this.activeLink = section.link;
//         this.activeLink.classList.add('-active');
//         break;
//       }
//       else {
//         this.turnOffCurrentlyActive();
//       }
//     }

//   }

//   turnOffCurrentlyActive() {
//     if (this.activeLink) {
//       this.activeLink.classList.remove('-active');
//     }
//   }

//   cacheDetails(section) {
//     let id = '#' + section.getAttribute('id');
//     let link = this.el.querySelector(`a[href='${id}']`);
//     let offsetTop = section.offsetTop;

//     this.map[id] = {id, link, offsetTop};
//   }
// }

//call the StickyNav module
//new StickyNav(selectElements('sticky-nav'));





