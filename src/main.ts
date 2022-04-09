import { initApi } from '@/api';
import { checkDatabaseIntegrity } from '@/app/helpers/database';
import log from '@/app/helpers/log';
import { ApiConfig } from '@/config/Api';
import { database } from '@/database';

((async () => {
  await checkDatabaseIntegrity(database, true, false);
  await initApi(ApiConfig);

  log.info(`Server running at ${ApiConfig.port}`);
})());
