import Configstore from 'configstore';
import parseArgv from 'minimist';
import { local } from './utils/files';
import fs from 'fs';

/*
* Parses the arguments passed down to the CLI and stores them.
*/

const pkg = JSON.parse(fs.readFileSync(local('package.json')).toString());
const conf = new Configstore(pkg.name);
const isThisCommand = process.argv[1].indexOf(Object.keys(pkg.bin)[0]) >= 0;

if (isThisCommand) {
  const argv = parseArgv(process.argv.slice(2));

  conf.clear();
  conf.set(argv);
}

const { _: argument, ...flag } = conf.all;

export {
  argument,
  flag
}
