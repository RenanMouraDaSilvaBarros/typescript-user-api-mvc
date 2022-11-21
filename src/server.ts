import { app } from './app';

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`LOG-Process starting at the port ${PORT}`);
});

process.on('SIGINT', () => {
  server.close();
  console.log('LOG-Interrupted application');
});
