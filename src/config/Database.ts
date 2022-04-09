import { IDatabaseConfig } from '../types/config';

export const DatabaseConfig: IDatabaseConfig = {
  url: process.env.DATABASE_URL || '',
};
