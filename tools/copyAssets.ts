/* eslint-disable import/no-extraneous-dependencies */
import * as shell from 'shelljs';

// Copy all the view templates
shell.cp('-R', 'src/api/utils', 'dist/api');
shell.cp('-R', 'src/config', 'dist/');
