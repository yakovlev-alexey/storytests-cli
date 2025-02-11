import { cosmiconfig } from 'cosmiconfig';

import { schema } from './schema';
import type { TConfig } from './types';
import { generateModuleNames } from './generateModuleNames';

const explorer = cosmiconfig('storytests', {
    searchPlaces: generateModuleNames('storytests'),
});

const loadConfig = async (configPath?: string | null): Promise<TConfig> => {
    const result = await (configPath
        ? explorer.load(configPath)
        : explorer.search());

    if (!result || result.isEmpty) {
        throw new Error('Unable to find storytests config file');
    }

    const { config } = result;

    await schema.validateAsync(config);

    return config;
};

export { loadConfig };
