const primaryHeader = document.querySelector('.primary-header')
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNavigation = document.querySelector('.primary-navigation')

navToggle.addEventListener('click', () => {
  primaryNavigation.hasAttribute('data-visible') ? primaryNavigation.setAttribute('aria-expanded', false) : primaryNavigation.setAttribute('aria-expanded', true)
  primaryNavigation.toggleAttribute('data-visible')
  primaryHeader.toggleAttribute('data-overlay')
})