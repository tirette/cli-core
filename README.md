# CLI-core

The core module to parse CLI arguments and execute CLI commands.

[ideology](#ideology)

[usage](#usage)

This package is the core module required by Tirette CLI packages to parse CLI arguments and execute CLI commands.

---

## Ideology
To keep Tirette's code bases as future proof as possible we reduce mentions of third-party modules to a minimum. Only third-party modules necessary for the working of the core of the project are allowed. We will implement as many features as possible without the use of third-parties as long as this is viable. This does not mean we reinvent the wheel though. We have repositories like this one to bridge the gap between what we can implement ourself and the heavy lifting done by others. Where we create our own native API to connect our projects to existing third-parties. An API wall as we like to call it. This approach has a few benefits over intertwining third-party code with our own:
1. This allows us to maintain an API of our own and design it in a way that seems most proficient to our cause, separate from our main projects.
2. This makes us independent of third-parties or unsusceptible to deprecations, breaking changes or cluttering the code-base with workarounds or bug fixes that should actually be handled by those third-parties.
3. This allows us to map multiple third-parties to a single API and flexibly swap between them.

## Usage

### Execute
Executes a CLI command.
```javascript
import { execute } from '@tirette/cli-core';

execute('example');
```

### Command
Read out the command that is being run.
```cli
CLI: example argument
```
```javascript
import { command } from '@tirette/cli-core';

console.log(command); // ['example']
```

### Positionals
Read out positional arguments passed down to the CLI command defined in package.json bin.
```cli
CLI: example argument
```
```javascript
import { positionals } from '@tirette/cli-core';

console.log(positionals); // ['argument']
```

### Flags
Read out a flag passed down to the CLI command defined in package.json bin.
```cli
CLI: example --boolean --option='hello world'
```
```javascript
import { flags } from '@tirette/cli-core';

console.log(flags.boolean); // true
console.log(flags.option); // hello world
```

### Store arguments
Write arguments to a file.
```javascript
import { storeArgs } from '@tirette/cli-core';

storeArgs('filepath');
```

### Read arguments from store
Read arguments from file.
```javascript
import { readArgs } from '@tirette/cli-core';

const { positionals, flags } = readArgs('filepath');
```

