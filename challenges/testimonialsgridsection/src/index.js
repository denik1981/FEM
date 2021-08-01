import './css/_vendors.css'
import './css/main.css'

// This prevents the animation from running again when the user resizes
// Or when the user switch from portrait to landscape
// It also disables the animation on portrait devices of less that 1280px width

function removeAnimation () {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  const testimonials = [...document.getElementsByClassName('testimonial')]
  if (vw <= 1280) { testimonials.forEach(testimonial => testimonial.classList.remove('animate')) }
  testimonials.forEach(v => v.addEventListener('animationend', e => e.target.classList.remove('animate')))
}

window.onload = removeAnimation
