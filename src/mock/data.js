import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'RecipeShare.png',
    title: 'Recipe Share',
    info:
      "A recipe editor that allows users version control capabilities - they can create recipes and edit them. Then they can view all previous versions of that recipe.if you're cooking in a kitchen and you need to edit ingredients you need to have a seamless user experience so user flow for this kind of action would be better in Mobile.",
    info2:
      '\n\nFrontend- React Native,\n\nBackend- Node, Express n\n Database: Postgresn\nDeployment: Heroku',
    url: 'https://www.youtube.com/watch?v=4C5nuCcU-_I',
    repo: 'https://github.com/Lambda-School-Labs/cooking-recipe-source-control-fe', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'SalaryEstimator.jpg',
    title: 'Salary Estimator',
    info:
      'Created a web app that takes in an individuals major, region of work, and university along with loan amounts and the years they plan on paying it back. After a person calculates presses the calculate button they are provided with an estimate of their average salary for the first few years of work and depending on the loan amount how much they will need to give up on average per month and year',
    info2: 'Front End - ReactJS\n Back End - Python (Flask)',
    url: 'https://salary-estimating.herokuapp.com/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'MUD.png',
    title: 'Multi-User Dungeon',
    info:
      'Built and deployed a functional MUD server. Created random rooms with unique descriptions and the ability to move to different rooms. Teh functionality was built out and could be played from the  backend. Created a simple front end to show off the funcitonality',
    info2: 'Front End - ReactJS  \n Back End - Python (django)',
    url: 'https://team-oreo-mud.netlify.com/',
    repo: 'https://github.com/Team-Oreo-CS-Build-Week1', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'o.albaroudi96@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/obaida-albaroudi-2b9ab5134/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/Obaida-Albaroudi',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
