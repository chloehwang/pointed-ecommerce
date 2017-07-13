import inViewport from 'in-viewport';

export default class StickyNav {
  constructor(el) {
    this.el = el;
    this.setVars();
    this.init();
  }

  setVars() {
    this.navHeight = this.el.offsetHeight;
    this.sections = [].slice.call(document.getElementsByClassName('opportunity'));
    this.currentlyActiveLink;
  }

  init() {
    this.sections.forEach(this.setInViewportHandler.bind(this))
  }

  getNavLink(section) {
    let id = '#' + section.getAttribute('id');
    return this.el.querySelector(`a[href='${id}']`);
  }

  setInViewportHandler (section) {
    let link = this.getNavLink(section);
    let watcher = inViewport(section, { container: this.el, offset: -1 * this.navHeight - 5 }, function() {
      this.setActiveSection(link, watcher)
    }.bind(this));
  }

  setActiveSection(link, watcher) {
    if (this.currentlyActiveLink) {
      this.currentlyActiveLink.classList.remove('-active');
    }

    this.currentlyActiveLink = link;
    this.currentlyActiveLink.classList.add('-active');

    //rewatch for entering viewport
    setTimeout(watcher.watch, 1000)
  }
}
