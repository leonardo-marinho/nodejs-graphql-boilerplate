import { Prisma, PrismaClient } from '@/database/client';
import log from '@/app/helpers/log';
import { execShellCommand } from '@/app/helpers/shell';

export const migrate = async () => {
  await execShellCommand('npm run db:migrate');
};

export const seed = async () => {
  await execShellCommand('npm run db:seed');
};

export const checkDatabaseIntegrity = async (
  prisma: PrismaClient,
  tryMigrate = true,
  trySeed = true,
) => {
  log.info('Detecting database integrity...');
  const models = Object.keys(Prisma.ModelName);
  let errorCount = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const model of models) {
    try {
      // @ts-ignore
      // eslint-disable-next-line no-await-in-loop
      await prisma[model].findFirst();
    } catch (err) {
      errorCount++;
    }
  }
  if (errorCount === models.length) {
    log.warn('Database empty');
    if (tryMigrate) {
      log.info('Migrating...');
      await migrate();
    }
    if (trySeed) {
      log.info('Seeding...');
      await seed();
    }
  }
  log.info('Database integrity OK');
};
