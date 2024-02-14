function toggleMenu(){
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');

    function isSectionFullyInView(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function toggleSectionAnimation() {
      sections.forEach(section => {
        if (isSectionFullyInView(section)) {
          section.classList.add('in-view');
        } else {
          section.classList.remove('in-view');
        }
      });
    }

    // Listen for scroll events and toggle section animation accordingly
    window.addEventListener('scroll', toggleSectionAnimation);
    window.addEventListener('resize', toggleSectionAnimation);

    // Trigger animation on page load
    toggleSectionAnimation();
  });

  const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', function() {
  if(this.checked) {
    // Dark mode is enabled
    document.body.classList.add('dark-mode');
  } else {
    // Dark mode is disabled
    document.body.classList.remove('dark-mode');
  }   
});
