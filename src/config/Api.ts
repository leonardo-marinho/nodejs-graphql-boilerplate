import { IApiConfig } from '../types/config';

export const ApiConfig: IApiConfig = {
  port: Number(process.env.APP_PORT) || 3000,
};
