import wp from '../Assets/images/word-to-pdf.png';
import crm from '../Assets/images/CRM.png';
import med from '../Assets/images/Med.png';

export const projects = [
  {
    title: 'Word To PDF Converter',
    description: 'A full stack web app made to convert Word files to PDF. Technologies applied include Docker, Github Workflows, and more.',
    image: wp,
    github: 'https://github.com/Devgarg1302/Word-pdf',
    demo: 'https://word-pdf.vercel.app/',
    tags: ['React', 'Node.js', 'Docker'],
  },
  {
    title: 'Campaign Management System',
    description: 'A CRM website to manage customer data and campaigns.',
    image: crm,
    github: 'https://github.com/Devgarg1302/Campaign',
    demo: 'https://campaign-sigma-ten.vercel.app/',
    tags: ['React', 'Nodejs', 'Kafka', 'MongoDB'],
  },
  {
    title: 'My-Care Medicine Dispenser Manager',
    description: 'A web app to manage medicine schedules and notifications to keep better care of patients.',
    image: med,
    github: 'https://github.com/Devgarg1302/Medicine-Schedule-web',
    demo: 'https://medicine-schedule-web.vercel.app/',
    tags: ['JavaScript', 'React', 'Nodejs', 'MongoDB'],
  },
];