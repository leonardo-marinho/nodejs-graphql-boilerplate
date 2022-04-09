import faker from 'faker';
import { server as testServer } from '../../../src/api';
import { database } from '../../../src/database';

describe('query listUsers', () => {
  test('empty return', async () => {
    await database.user.deleteMany({});
    const { data, errors } = await testServer.executeOperation({
      query: 'query { listUsers { ukey } }',
    });

    expect(errors).toBeUndefined();
    expect(data?.listUsers).toHaveLength(0);
  });
  test('non empty return', async () => {
    await database.user.createMany({
      data: [
        {
          email: faker.internet.email(),
        },
      ],
    });
    const { data, errors } = await testServer.executeOperation({
      query: 'query { listUsers { ukey } }',
    });

    expect(errors).toBeUndefined();
    expect(data?.listUsers).toHaveLength(1);
  });
});
