import './css/_vendors.css'
import './css/main.css'

const ACCORDION_FALLBACK_NOJS = 'fallbackNoJS'

const ACCORDION = {
  accordion: 'faqs',
  header: 'faq__question',
  content: 'faq__answer',
  duration: 1000
}

// function init () {
//   getAccordion(ACCORDION)
//     .then(accordion => installAccordion(accordion))
//     .catch((e) => { console.error('There was an error when trying to get the accordion', e) })

//   async function getAccordion (accordion) {
//     const { default: Accordion } = await import('./accordion.js')
//     return new Accordion(accordion)
//   }

//   function installAccordion (accordion) {
//     removeCSSfallback(ACCORDION_FALLBACK_NOJS)
//     accordion.make()
//   }

//   function removeCSSfallback (fallback) {
//     document.getElementsByClassName(fallback)[0].classList.remove(fallback)
//   }
// }

// function _resetDetailsDefaults (selector, events, fallback) {
//   document.querySelector(`[${fallback}]`).removeAttribute(fallback)
//   const elements = document.querySelectorAll(selector)
//   elements.forEach(element => {
//     [...events].forEach(event => element.addEventListener('click', (e) => e.preventDefault()))
//   })
// }

// window.onload = init
