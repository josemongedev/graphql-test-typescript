dotenv.config();
import consola from 'consola';
import dotenv from 'dotenv';
import app from './app.ts';

const { url } = await app;
consola.info(`🚀  Server ready at: ${url}`);
