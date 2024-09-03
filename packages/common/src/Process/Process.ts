import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

export default class Process {
    public static exec(cmd: string) {
        return new Promise((resolve, reject) =>
            exec(cmd, (error, stdout, stderr) => {
                if (error) {
                    console.error(`execCommand failed: "${cmd}" \n${error}`);
                    reject(error);
                }
                resolve(stdout ? stdout : stderr);
            }),
        );
    }

    public static copyFiles(srcDir: string, destDir: string) {
        fs.readdir(srcDir, (err, files) => {
            for (const file of files) fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
        });
    }
}
