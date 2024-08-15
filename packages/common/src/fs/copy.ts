import fs from 'fs';
import path from 'path';

export const copyFiles = (srcDir: string, destDir: string) =>
    fs.readdir(srcDir, (err, files) => {
        for (const file of files) fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
    });
