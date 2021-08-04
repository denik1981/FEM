import './css/_vendors.css'
import './css/main.css'

const settings = {
  fallback: 'fallbackNoJS'
}

function init () {
  const { fallback } = settings
  document.querySelector(`[${fallback}]`).removeAttribute(fallback)
  preventDefaults('summary', ['onclick'])
}

function preventDefaults (selector, events) {
  const elements = document.querySelectorAll(selector)
  elements.forEach(element => {
    [...events].forEach(event => element.addEventListener('click', (e) => e.preventDefault()))
  })
}

window.onload = init
