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

//copyright date
const footer = document.getElementById('footer');
const dateText = `&#169; ${new Date().getFullYear()} - Aaron Resch`;
footer.innerHTML = dateText;

const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'VueJS',
    'C#',
    'SQL Server',
    'PostgreSQL',
    'Git',
	'Accessibility',
    'VB/Access',
    'Node.js',
    'Express',
    'Monorepo',
    'ASP .NET/MVC',
    'DevOps',
    'Responsive Design',
    'Figma',
    'API Design',
];
const skillsContainer = document.querySelector('.skills__container');
const skillElements = skills.map(
    (skill) => `<p class="skills__item">${skill}</p>`
);
skillsContainer.innerHTML = skillElements.join('');
