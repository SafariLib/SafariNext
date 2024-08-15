import { exec } from 'child_process';

export const execCommand = (cmd: string) =>
    new Promise((resolve, reject) =>
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.error(`execCommand failed: "${cmd}" \n${error}`);
                reject(error);
            }
            resolve(stdout ? stdout : stderr);
        }),
    );
