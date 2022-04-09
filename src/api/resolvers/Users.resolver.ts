import { database } from '@/database';

export default {
  Query: {
    async listUsers() {
      return await database.user.findMany({});
    },
  },
};
