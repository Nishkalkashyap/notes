import * as fs from 'fs-extra';
import * as Path from 'path';

export function reccursiveIgnoreFunction(path: string, stat: fs.Stats) {

    if (stat.isDirectory() && path.includes('node_modules')) {
        return true;
    }

    if (stat.isDirectory() && Path.resolve(path) == Path.resolve('./tags')) {
        return true;
    }

    if (stat.isDirectory()) {
        return false;
    }

    if (!path.endsWith('md')) {
        return true;
    }
}