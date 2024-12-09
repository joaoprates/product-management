// Declaração para o Webpack reconhecer `require.context`
declare const require: {
    context(
      path: string,
      deep?: boolean,
      filter?: RegExp
    ): {
      keys(): string[];
      <T>(id: string): T;
    };
  };
  
  // Inclui o Zone.js necessário para testes Angular
  import 'zone.js/testing';
  import { getTestBed } from '@angular/core/testing';
  import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting,
  } from '@angular/platform-browser-dynamic/testing';
  
  // Localiza e importa automaticamente todos os arquivos de teste .spec.ts
  const context = require.context('./', true, /\.spec\.ts$/);
  
  // Carrega os módulos de teste
  context.keys().forEach(context);
  
  // Inicializa o ambiente de teste Angular
  getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
  