import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  host: process.env.HOST || 'localhost',
  prot: parseInt(process.env.PORT, 10) || 3000,
}));
