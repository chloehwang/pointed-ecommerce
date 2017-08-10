export default class StickyLink {
  constructor(el) {
    this.el = el;
    this.setVars();
    this.init();
  }

  setVars() {
    this.label = this.el.dataset.label;
    this.section = document.getElementById(this.label);
    this.navbar = document.getElementsByClassName("sticky-nav")[0];
  }

  init() {
    this.el.addEventListener('click', function(e) {
      e.preventDefault();
      this.switchActiveLink();

      let sectionTop = this.section.offsetTop;
      let navbarHeight = this.navbar.clientHeight;

      if (navbarHeight > 118) {
        navbarHeight = 0;
      }

      window.scroll({
        top: sectionTop - navbarHeight + 1,
        left: 0,
        behavior: 'smooth'
      });
    }.bind(this))
  }

  switchActiveLink() {
    let currentlyActiveLink = this.navbar.getElementsByClassName('-active')[0];

    if (currentlyActiveLink) {
      currentlyActiveLink.classList.remove('-active');
    }

    this.el.classList.add('-active');
  }
}
