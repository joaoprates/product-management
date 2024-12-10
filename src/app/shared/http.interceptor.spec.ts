import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { ContentTypeInterceptor } from './http.interceptor';
import { of } from 'rxjs';

describe('ContentTypeInterceptor', () => {
  it('should add headers to the request', () => {
    const mockRequest = new HttpRequest('GET', '/test-endpoint');

    const mockHandler: HttpHandler = {
      handle: jest.fn((req: HttpRequest<any>) => {
        // Aqui verificamos o estado do `req` modificado
        expect(req.headers.has('X-API-Key')).toBe(true);
        expect(req.headers.get('X-API-Key')).toBe('{{token}}');
        expect(req.headers.has('Content-Type')).toBe(true);
        expect(req.headers.get('Content-Type')).toBe('application/json');
        return of({} as HttpEvent<any>); // Retorna um Observable vazio
      }),
    };

    ContentTypeInterceptor(mockRequest, mockHandler.handle);

    // Verifica se o `handle` foi chamado
    expect(mockHandler.handle).toHaveBeenCalled();
  });
});
