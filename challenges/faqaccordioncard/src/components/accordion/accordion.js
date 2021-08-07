/* eslint-disable space-before-function-paren */
'use strict';

class Accordion {
  /**
   * @typedef {{accordionClass: {string}, controlId: string, controlClass:string, contentClass:string }} settings
   * @returns {settings}
   */
  static get settings() {
    return {
      accordionClass: 'accordion',
      controlIdAttr: 'ac-control',
      controlClass: 'accordion__control',
      contentClass: 'accordion__content'
    };
  }

  constructor() {
    this.currentActive = null;
  }

  make() {
    const controls = Array.from(document.getElementsByClassName(Accordion.settings.controlClass));
    controls.forEach((control, index) => this._installControl(control, index));
  }

  destroy() {
    const controls = Array.from(document.getElementsByClassName(Accordion.settings.controlClass));
    controls.forEach((control, index) => this._uninstallControl(control, index));
  }
  /**
   *
   * @param {HTMLDetailsElement} control
   * @param {number} index
   */
  _installControl(control, index) {
    control.setAttribute(Accordion.settings.controlIdAttr, index);
    control.addEventListener('click', (e) => this._toogleAccordionState(e, this));
    //
  }

  _uninstallControl(control, index) {
    control.removeAttribute(Accordion.settings.controlIdAttr);
    control.removeEventListener('click', (e) => this._toogleAccordionState(e, this));
    //
  }
  /**
   *
   * @param {Event} event
   * @param {Accordion} accordion
   */
  _toogleAccordionState(event, accordion) {
    const accordionClass = Accordion.settings.accordionClass;
    const controlIdAttr = Accordion.settings.controlIdAttr;
    const contentClass = Accordion.settings.contentClass;
    const activeClass = [Accordion.settings.controlClass, 'active'].join('--');

    event.preventDefault();

    const currentActive = event.currentTarget.getAttribute(controlIdAttr);
    const previousActive = accordion.currentActive;

    const currentControl = event.currentTarget;
    const currentContent = event.currentTarget.getElementsByClassName(contentClass)[0];

    accordion._toogleContentHeight(currentContent);
    accordion._toogleElementClass(currentControl, activeClass);

    if (previousActive !== currentActive && previousActive !== null) {
      const previousControlSelector = `.${accordionClass} [${controlIdAttr}="${previousActive}"]`;
      const previousControl = document.querySelector(previousControlSelector);
      const previousContent = previousControl.getElementsByClassName(contentClass)[0];
      accordion._toogleContentHeight(previousContent);
      accordion._toogleElementClass(previousControl, activeClass);
    }

    accordion.currentActive = previousActive === currentActive ? null : currentActive;
  }

  /**
   *
   * @param {HTMLElement} element
   * @param {string} elementClass
   */
  _toogleElementClass(element, elementClass) {
    if (element.classList.contains(elementClass)) {
      element.classList.remove(elementClass);
    } else {
      element.classList.add(elementClass);
    }
  }
  /**
   *
   * @param {HTMLElement} element
   */
  _toogleContentHeight(element) {
    const height = element.offsetHeight ? 0 : element.scrollHeight;
    element.style.height = height + 'px';
  }
}
export default Accordion;
