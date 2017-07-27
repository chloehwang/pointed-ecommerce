import bodymovin from 'bodymovin';
import inViewport from 'in-viewport';

export default class SolutionAnimation {
  constructor(el) {
    this.el = el;
    this.anim = bodymovin.loadAnimation({
      container: this.el,
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: 'data.json'
    });
    this.init();
  }

  init() {
    inViewport(this.el, {offset: -90}, function() {
      this.anim.play();
    }.bind(this))
  }
}
