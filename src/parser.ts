import parseArgv from 'minimist';
import fs from 'fs';

/*
* Parses the arguments passed down to the CLI and stores them.
*/

const command = process.argv[1].split('/').pop();
const args = parseArgv(process.argv.splice(2));
const { _: positionals, ...flags } = args;

const storeArgs = (path: string): void => {
  const data = JSON.stringify({ positionals, flags });
  fs.writeFileSync(path, data);
}

const readArgs = (path: string) => {
  const fileContent = fs.readFileSync(path);

  return JSON.parse(fileContent.toString());
}

export {
  command,
  positionals,
  flags,
  storeArgs,
  readArgs
}
