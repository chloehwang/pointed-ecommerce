import inViewport from 'in-viewport';

export default class StickyNav {
  constructor(el) {
    this.el = el;
    this.container = el.querySelector('.inViewportContainer');
    this.sectionAbove = document.getElementsByClassName('problem2')[0];
    this.setVars();
    this.init();
  }

  setVars() {
    this.navHeight = this.el.offsetHeight;
    this.sections = [].slice.call(document.getElementsByClassName('opportunity'));
    this.currentlyActiveLink;
  }

  init() {
    this.sections.forEach(this.setInViewportHandler.bind(this));

    //added watcher for section above sticky nav so we know when user has left sticky sections
    let watcherSectionAbove = inViewport(this.sectionAbove, function() {
      this.turnOffActiveLink();
      this.watchAgain(watcherSectionAbove);
    }.bind(this));
  }

  getNavLink(section) {
    let id = section.getAttribute('id');
    return this.el.querySelector(`a[data-label='${id}']`);
  }

  setInViewportHandler(section) {
    let link = this.getNavLink(section);

    let watcherNavLink = inViewport(section, { container: this.container }, function() {
      if (this.currentlyActiveLink !== link) {
        this.setActiveSection(link);
      }

      this.watchAgain(watcherNavLink);
    }.bind(this));
  }

  setActiveSection(link) {
    this.turnOffActiveLink();
    this.currentlyActiveLink = link;
    this.currentlyActiveLink.classList.add('-active');
  }

  turnOffActiveLink() {
    if (this.currentlyActiveLink) {
      this.currentlyActiveLink.classList.remove('-active');
      this.currentlyActiveLink = null;
    }
  }

  watchAgain(watcher) {
    setTimeout(watcher.watch, 1000);
  }
}
