const sections = document.querySelectorAll('section');

const options = {
  threshold: 0.5  // Trigger callback when 50% of the element is visible
};

function setActive(id) {
  const navItems = document.querySelectorAll('nav a');
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.textContent === id) {
      item.classList.add('active');
    }
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target.id != '') {
      setActive(entry.target.id);
      console.log(`Section ${entry.target.id} is in view.`);
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});
