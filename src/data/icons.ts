import HTML5 from '../assets/svg/html-5.svg?raw';
import CSS3 from '../assets/svg/css-3.svg?raw';
import Tailwind from '../assets/svg/tailwindcss.svg?raw';
import JavaScript from '../assets/svg/javascript.svg?raw';
import TypeScript from '../assets/svg/typescript.svg?raw';
import Node from '../assets/svg/nodejs.svg?raw';
import React from '../assets/svg/react.svg?raw';
import Svelte from '../assets/svg/svelte.svg?raw';
import NextJS from '../assets/svg/nextjs.svg?raw';
import MySQL from '../assets/svg/mysql.svg?raw';
import PostgreSQL from '../assets/svg/postgresql.svg?raw';
import NGINX from '../assets/svg/nginx.svg?raw';
import RabbitMQ from '../assets/svg/rabbitmq.svg?raw';
import Redis from '../assets/svg/redis.svg?raw';

export type Icon = {
  title: string;
  file: string;
};

export const icons: Icon[] = [
  {
    title: 'HTML',
    file: HTML5,
  },
  {
    title: 'CSS',
    file: CSS3,
  },
  {
    title: 'Tailwind',
    file: Tailwind,
  },
  {
    title: 'JavaScript',
    file: JavaScript,
  },
  {
    title: 'TypeScript',
    file: TypeScript,
  },
  {
    title: 'Node.js',
    file: Node,
  },
  {
    title: 'React',
    file: React,
  },
  {
    title: 'Svelte',
    file: Svelte,
  },
  {
    title: 'Next.js',
    file: NextJS,
  },
  {
    title: 'MySQL',
    file: MySQL,
  },
  {
    title: 'PostgreSQL',
    file: PostgreSQL,
  },
  {
    title: 'NGINX',
    file: NGINX,
  },
  {
    title: 'RabbitMQ',
    file: RabbitMQ,
  },
  // {
  //   title: 'Redis',
  //   file: Redis,
  // },
];
