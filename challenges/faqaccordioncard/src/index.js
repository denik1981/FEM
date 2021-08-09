import './css/_tailwind.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './components/accordion/accordion.css';
import './components/accordion/accordion.js';
import './css/main.css';
import Accordion from './components/accordion/accordion.js';

const ACCORDION_FALLBACK_NOJS = 'fallbackNoJS';
const ACCORION_ROOT_CLASS = 'accordion';
const MODE_CLASS = 'mode-switch';

(function () {
  let JS_MODE = true;

  function init() {
    const modeSwitcher = document.querySelector(`.${MODE_CLASS} input[type=checkbox]`);

    toogleCSSfallback(JS_MODE, ACCORDION_FALLBACK_NOJS);
    toogleDetailsElementsState(JS_MODE);
    installAccordion();

    modeSwitcher.addEventListener('change', changeMode);
  }

  function changeMode(event) {
    let mode = !event.target.checked;

    toogleCSSfallback(mode, ACCORDION_FALLBACK_NOJS);
    toogleDetailsElementsState(mode);

    if (mode === JS_MODE) {
      installAccordion();
    } else {
      uninstallAccordion();
    }
  }

  function installAccordion() {
    const accordion = new AccordionWithModeSwitch();
    accordion.make();
    window.accordion = accordion;
  }

  function uninstallAccordion() {
    window.accordion.destroy();
  }

  function toogleCSSfallback(mode, fallback) {
    const fallbackClassList = document.getElementsByClassName(ACCORION_ROOT_CLASS)[0].classList;
    if (mode === JS_MODE) {
      fallbackClassList.remove(fallback);
    } else {
      fallbackClassList.add(fallback);
    }
  }

  function toogleDetailsElementsState(mode) {
    const details = Array.from(document.getElementsByTagName('details'));

    if (mode === JS_MODE) {
      details.forEach((element) => {
        element.setAttribute('open', '');
      });
    } else {
      details.forEach((element) => {
        element.removeAttribute('open');
      });
    }
  }
  window.onload = init;
  class AccordionWithModeSwitch extends Accordion {
    destroy() {
      this._resetAllHeights();
      super.destroy();
    }
    _resetAllHeights() {
      const contents = Array.from(document.getElementsByClassName(this.settings.contentClass));
      contents.forEach((content) => {
        content.style.height = null;
      });
    }
  }
})();
