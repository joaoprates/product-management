import { HttpInterceptorFn } from '@angular/common/http';

export const ContentTypeInterceptor: HttpInterceptorFn = (req, next) => {
  const token = '{{token}}'; // Substitua pelo valor do token (ou recupere dinamicamente)

  const modifiedReq = req.clone({
    setHeaders: {
      'X-API-Key': token,
      'Postman-Token': 'cbe8203e-5bf8-47c9-9e85-500dd28603f6', // Gerado automaticamente
      Host: 'localhost:9090', // Ajuste para o seu domínio
      'Content-Type': 'application/json', // Content-Type obrigatório
    },
  });
    return next(modifiedReq);
};
