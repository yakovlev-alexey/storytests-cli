import yargs from 'yargs';

import type { TArgs } from './types';

const argsOptions = yargs
    .option('rewrite', {
        alias: 'r',
        describe: 'Rewrite existing test files',
        type: 'boolean',
        nargs: 1,
        default: false,
        demandOption: false,
    })
    .option('config', {
        alias: 'c',
        describe: 'Specify config path',
        type: 'string',
        nargs: 1,
        default: null,
        demandOption: false,
    });

const loadArgs = (): TArgs => {
    return argsOptions.argv;
};

export { loadArgs };
