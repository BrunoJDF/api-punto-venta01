import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    postgres: {
      name: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT, 10),
    },
    postgresUrl: process.env.POSTGRES_URL,
  };
});
