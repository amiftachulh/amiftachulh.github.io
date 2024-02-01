import kagiMusic from '../assets/images/kagi-music.svg';
import weatherApp from '../assets/images/weather-app.svg';
import taskApp from '../assets/images/task-app.svg';
import noreTask from '../assets/images/nore-task.svg';

type Project = {
  title: string;
  img: any;
  description: string;
  url: string;
  github: string;
};

export const projects: Project[] = [
  {
    title: 'Task App',
    img: taskApp,
    description: 'Kanban board to manage tasks. Built with React, TypeScript, and Tailwind with DaisyUI.',
    url: 'https://task-app-060f41.netlify.app/',
    github: 'https://github.com/amiftachulh/task-app',
  },
  {
    title: 'KAGI Music',
    img: kagiMusic,
    description: 'Personal website to share guitar tabs of my favorite songs that I make. Built with Sveltekit.',
    url: 'https://kagi-music.vercel.app/',
    github: 'https://github.com/amiftachulh/kagi-music',
  },
  {
    title: 'Weather App',
    img: weatherApp,
    description: 'A simple weather and forecast app. Built with React, JavaScript, and Tailwind.',
    url: 'https://weather-app-18b0ed.netlify.app/',
    github: 'https://github.com/amiftachulh/weather-app',
  },
  {
    title: 'Nore Task',
    img: noreTask,
    description: 'Project I worked on during my internship. A simple microservices built with Node.js and TypeScript.',
    url: '',
    github: 'https://github.com/amiftachulh/nore-task-backend',
  },
];
