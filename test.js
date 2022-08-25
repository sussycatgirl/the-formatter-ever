#!/usr/bin/node

import fs from 'fs';
import { format } from './index.js';

console.log(format(fs.readFileSync('./index.js').toString('utf8')));
