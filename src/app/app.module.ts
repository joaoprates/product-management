import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes'; // Importando as rotas standalone
import { ContentTypeInterceptor } from './shared/http.interceptor.spec';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes), // Configuração das rotas standalone
  ],
  providers: [
    provideAnimations(),
    provideHttpClient(withInterceptors([ContentTypeInterceptor])), // Para animações do Angular Material
  ],
  
})
export class AppModule {}
