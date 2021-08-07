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

function init() {
  const JS_MODE = true;
  const CSS_MODE = false;

  installAccordion();
  const modeSwitch = document.querySelector(`.${MODE_CLASS} input[type=checkbox]`);
  modeSwitch.addEventListener('change', changeMode);

  function installAccordion() {
    toogleCSSfallback(JS_MODE, ACCORDION_FALLBACK_NOJS);
    toogleDetailsElementsState(JS_MODE);
    const accordion = new Accordion();
    accordion.make();
    window.accordion = accordion;
  }

  function uninstallAccordion() {
    toogleCSSfallback(CSS_MODE, ACCORDION_FALLBACK_NOJS);
    toogleDetailsElementsState(CSS_MODE);
    window.accordion.destroy();
  }

  function changeMode(event) {
    const checked = event.target.checked;
    const mode = checked ? CSS_MODE : JS_MODE;

    if (mode) {
      installAccordion();
    } else uninstallAccordion();
  }

  function toogleCSSfallback(mode, fallback) {
    const fallbackClassList = document.getElementsByClassName(ACCORION_ROOT_CLASS)[0].classList;
    if (mode) {
      fallbackClassList.remove(fallback);
    } else {
      fallbackClassList.add(fallback);
    }
  }

  function toogleDetailsElementsState(mode) {
    const details = Array.from(document.getElementsByTagName('details'));

    if (mode) {
      details.forEach((element) => {
        element.setAttribute('open', '');
      });
    } else {
      details.forEach((element) => {
        element.removeAttribute('open');
      });
    }
  }
}
window.onload = init;
