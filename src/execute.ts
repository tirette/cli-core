import cp from 'child_process';

/*
* Execute a given command.
*/

const execute = async (command: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const executedCommand = cp.spawn(command, {
      stdio: 'inherit',
      shell: true
    });

    executedCommand.on('error', (): void => {
      reject();
      process.exit(1);
    });

    executedCommand.on('exit', (code: number): void => {
      if (code === 0) {
        resolve();
      } else {
        reject();
      }

      process.exit(code);
    });
  })
}

export default execute;
