import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes'; // Importando as rotas standalone
import { OverlayModule } from '@angular/cdk/overlay';
import { ContentTypeInterceptor } from './shared/http.interceptor';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AuthModule } from './auth/auth.module';


@NgModule({
  imports: [
    BrowserModule,
    OverlayModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AuthModule, 
  ],
  providers: [
    provideAnimations(),
    provideHttpClient(withInterceptors([ContentTypeInterceptor])),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
})
export class AppModule {}
