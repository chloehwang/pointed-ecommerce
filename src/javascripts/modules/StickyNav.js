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

    let watcherSectionAbove = inViewport(this.sectionAbove, function() {
      this.turnOffActiveLink();
      this.watchAgain(watcherSectionAbove);
    }.bind(this));
  }

  getNavLink(section) {
    let id = '#' + section.getAttribute('id');
    return this.el.querySelector(`a[href='${id}']`);
  }

  setInViewportHandler(section) {
    let link = this.getNavLink(section);

    let watcherNavLink = inViewport(section, { container: this.container }, function() {
      this.setActiveSection(link, watcherNavLink)
    }.bind(this));
  }

  setActiveSection(link, watcherNavLink) {
    this.turnOffActiveLink();
    this.currentlyActiveLink = link;
    this.currentlyActiveLink.classList.add('-active');

    //rewatch for entering viewport
    this.watchAgain(watcherNavLink);
  }

  turnOffActiveLink() {
    if (this.currentlyActiveLink) {
      this.currentlyActiveLink.classList.remove('-active');
    }
  }

  watchAgain(watcher) {
    setTimeout(watcher.watch, 1000);
  }
}

WORK ON WHEN YOU CLICK ON LINKS, PADDING IS ADDED TO TOP
