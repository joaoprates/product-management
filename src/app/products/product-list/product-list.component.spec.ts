import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './product-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { OverlayModule } from '@angular/cdk/overlay';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        BrowserAnimationsModule,
        OverlayModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { id: 1 } },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should render products', () => {
  //   const mockProducts = [
  //     { id: 1, name: 'Product 1', description: 'Description 1', price: 100, category: 'Category 1', available: true },
  //     { id: 2, name: 'Product 2', description: 'Description 2', price: 200, category: 'Category 2', available: false },
      
  //   ];

  //   spyOn(component, 'fetchProducts').and.callFake(() => {
  //     component.products = mockProducts;
  //     return of(mockProducts).subscribe();
  //   });

  //   component.ngOnInit();
  //   fixture.detectChanges();

  //   const compiled = fixture.debugElement.nativeElement;
  //   const productCards = compiled.querySelectorAll('.product-card');

  //   expect(productCards.length).toBe(2);
  //   expect(productCards[0].textContent).toContain('Product 1');
  //   expect(productCards[1].textContent).toContain('Product 2');
  // });
});
