import { join } from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';

const allSchemas = loadFilesSync(join(__dirname, '*.gql'));
const rootSchema = loadFilesSync(join(__dirname, '*.graphql'));

export const typeDefs = mergeTypeDefs([...allSchemas, ...rootSchema]);
