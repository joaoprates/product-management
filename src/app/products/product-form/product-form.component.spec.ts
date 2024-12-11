import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './product-form.component';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { MaterialModule } from '@app/shared/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;

  // Mocks básicos
  const productServiceMock = {
    getProductById: jest.fn().mockReturnValue(of(null)), // Nenhum produto
    getCategories: jest.fn().mockReturnValue(of([])), // Nenhuma categoria
  };

  const activatedRouteMock = {
    snapshot: {
      paramMap: {
        get: jest.fn().mockReturnValue(null), // Nenhum ID de produto
      },
    },
  };

  const routerMock = { navigate: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductFormComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [ReactiveFormsModule, OverlayModule, HttpClientTestingModule, MaterialModule, RouterTestingModule, CommonModule, BrowserAnimationsModule],
      providers: [
        { provide: ProductService, useValue: productServiceMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Chama o ngOnInit()
  });

  it('should create the component and initialize the form', () => {
    expect(component).toBeTruthy(); // Certifica que o componente foi criado
    expect(component.productForm).toBeTruthy(); // Certifica que o formulário foi inicializado
    expect(component.productForm.valid).toBeFalsy(); // O formulário não é válido no início
  });

  it('should update form and become valid', () => {
    component.productForm.patchValue({
      name: 'Test Product',
      description: 'Test Description',
      price: 100,
      category: 'Test Category',
      available: true,
    });

    expect(component.productForm.valid).toBeTruthy(); // O formulário agora é válido
  });
});
