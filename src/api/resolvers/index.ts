import { join } from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers } from '@graphql-tools/merge';

const allResolvers = loadFilesSync(join(__dirname, '*.resolver.ts'));

export const resolvers = mergeResolvers(allResolvers);
