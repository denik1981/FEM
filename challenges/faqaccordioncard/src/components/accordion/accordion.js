/* eslint-disable space-before-function-paren */
'use strict';

class Accordion {
  /**
   * @typedef {{accordionClass: {string}, controlId: string, controlClass:string, contentClass:string }} settings
   * @returns {settings}
   */
  get settings() {
    return {
      accordionClass: 'accordion',
      controlIdClass: 'ac-control',
      controlClass: 'accordion__control',
      contentClass: 'accordion__content',
      activeClass: 'accordion__control--active'
    };
  }

  constructor() {
    this.accordionStateHandler = toogleAccordionState.bind(this);
    this.toogleAccordionState = toogleAccordionState;
    this.currentActive = null;
  }

  make() {
    const controls = Array.from(document.getElementsByClassName(this.settings.controlClass));
    controls.forEach((control, index) => this._installControl(control, index));
  }

  destroy() {
    const currentActiveElement = this._getCurrentActiveElement(this.currentActive);
    if (currentActiveElement) {
      this._toogleElementClass(currentActiveElement, this.settings.activeClass);
    }
    const controls = Array.from(document.getElementsByClassName(this.settings.controlClass));
    controls.forEach((control) => this._uninstallControl(control));
    delete this;
  }
  /**
   *
   * @param {HTMLDetailsElement} control
   * @param {number} index
   */
  _installControl(control, index) {
    control.classList.add(`${this.settings.controlIdClass}-${index}`);
    control.addEventListener('click', this.accordionStateHandler);
    //
  }

  _uninstallControl(control) {
    const controlIdClass = control.className.split(' ').filter((v) => v.startsWith(this.settings.controlIdClass));
    control.classList.remove(controlIdClass);
    control.removeEventListener('click', this.accordionStateHandler);
    //
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
  /**
   *
   * @param {number} id
   * @returns {HTMLElement}
   */
  _getCurrentActiveElement(id) {
    const selector = `.${this.settings.accordionClass} .${this.settings.controlIdClass}-${id}`;
    return document.querySelector(selector);
  }
}

function toogleAccordionState(e) {
  const controlIdClass = this.settings.controlIdClass;
  const contentClass = this.settings.contentClass;
  const activeClass = this.settings.activeClass;

  e.preventDefault();
  const currentActive = e.currentTarget.className
    .split(' ')
    .find((v) => v.startsWith(controlIdClass))
    .split('-')
    .pop();
  const previousActive = this.currentActive;

  const currentControl = e.currentTarget;
  const currentContent = e.currentTarget.getElementsByClassName(contentClass)[0];

  this._toogleContentHeight(currentContent);
  this._toogleElementClass(currentControl, this.settings.activeClass);

  if (previousActive !== currentActive && previousActive !== null) {
    const previousControl = this._getCurrentActiveElement(previousActive);
    const previousContent = previousControl.getElementsByClassName(contentClass)[0];
    this._toogleContentHeight(previousContent);
    this._toogleElementClass(previousControl, activeClass);
  }

  this.currentActive = previousActive === currentActive ? null : currentActive;
}

export default Accordion;
