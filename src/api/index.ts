import { ApolloServer } from 'apollo-server';
import { IApiConfig } from '@/types/config';
import { resolvers } from '@/api/resolvers';
import { typeDefs } from '@/api/schemas';

export const server = new ApolloServer({
  resolvers,
  typeDefs,
});

export interface IApiProps extends IApiConfig { }

export const initApi = async ({ port }: IApiProps) => {
  await server.listen({ port });

  return server;
};
