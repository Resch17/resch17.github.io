//mobile side nav click events
const checkbox = document.querySelector('.trigger');
const mobileNav = document.querySelector('.mobile-nav');
const hamburger = document.querySelector('.divided-hamburger');
const aboutLink = document.querySelector('#aboutLink');
const skillsLink = document.querySelector('#skillsLink');
const projectsLink = document.querySelector('#projectsLink');
const contactLink = document.querySelector('#contactLink');

hamburger.addEventListener('click', (event) => {
  if (checkbox.checked === true) {
    mobileNav.style.display = 'flex';
  } else {
    mobileNav.style.display = 'none';
  }
});

const linksArray = [aboutLink, skillsLink, projectsLink, contactLink];

linksArray.forEach((link) => {
  link.addEventListener('click', (evt) => {
    checkbox.checked = false;
    mobileNav.style.display = 'none';
  });
});
