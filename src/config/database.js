import prismaClient from './generated/client.js';

const connectDB = new prismaClient({
  log: [
    { level: 'query', emit: 'event' },
    { level: 'warn', emit: 'event' },
    { level: 'info', emit: 'event' },
    { level: 'error', emit: 'event' },
  ],
});

connectDB.$on('query', (e) => {
  console.log(e);
});

connectDB.$on('warn', (e) => {
  console.log(e);
});

connectDB.$on('info', (e) => {
  console.log(e);
});

connectDB.$on('error', (e) => {
  console.log(e);
});
