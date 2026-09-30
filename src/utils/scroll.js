/**
 * Smoothly scrolls to any target selector or element ID
 * Seamlessly integrates with Lenis smooth scroll if present on window, or uses native smooth scroll.
 * @param {string} targetId - ID of target element (e.g. 'contact' or '#contact')
 */
export const scrollToSection = (targetId) => {
  const id = targetId.startsWith('#') ? targetId : `#${targetId}`;
  const element = document.querySelector(id);
  
  if (!element) return;

  if (window.lenis && typeof window.lenis.scrollTo === 'function') {
    window.lenis.scrollTo(element, { offset: 0, duration: 1.2 });
  } else {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
