import { exec } from 'child_process';

export const execShellCommand = (cmd: string) => new Promise((resolve) => {
  exec(cmd, (error: any, stdout: any, stderr: any) => {
    if (error) {
      console.warn(error);
    }
    resolve(stdout || stderr);
  });
});
