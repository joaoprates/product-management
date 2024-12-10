// import 'zone.js/testing';
// import { getTestBed } from '@angular/core/testing';
// import {
//   BrowserDynamicTestingModule,
//   platformBrowserDynamicTesting,
// } from '@angular/platform-browser-dynamic/testing';
import { readdirSync } from 'fs';
import { join } from 'path';

// declare const require: {
//   context: (path: string, deep?: boolean, filter?: RegExp) => {
//     keys: () => string[];
//     (key: string): unknown;
//   };
// };

const context = (directory: string, useSubdirectories: boolean, regExp: RegExp) => {
  const files: Record<string, () => unknown> = {};
  const scanDirectory = (dir: string) => {
    const entries = readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory() && useSubdirectories) {
        scanDirectory(fullPath);
      } else if (regExp.test(entry.name)) {
        const key = `./${fullPath.replace(`${__dirname}/`, '')}`;
        files[key] = () => require(fullPath);
      }
    }
  };
  scanDirectory(directory);
  return {
    keys: () => Object.keys(files),
    require: (key: string) => files[key](),
  };
};


const testContext = context(__dirname, true, /\.spec\.ts$/);
testContext.keys().forEach(testContext.require);

// Configurações de testes Angular
// getTestBed().initTestEnvironment(
//   BrowserDynamicTestingModule,
//   platformBrowserDynamicTesting()
// );

// Executa todos os módulos de teste encontrados
const testModules = testContext.keys().map(testContext.require);
Object.values(testModules).forEach((testModule) => {
  if (typeof testModule === 'function') {
    testModule();
  }
});
