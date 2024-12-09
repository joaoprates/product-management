import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from '../../shared/material.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { Category } from '../shared/category.model';


@Component({
  selector: 'app-product-form',
  //imports: [ReactiveFormsModule, SharedModule, CommonModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  categories: Category[] = [];
  productId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
  
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      price: [0, Validators.required],
      category: ['', Validators.required],
      available: [false, Validators.required]
    });
  
    if (this.productId) {
      this.loadProduct();
    }
  
    // Carregar categorias reais
    this.productService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
  

  loadProduct(): void {
    this.productService.getProductById(Number(this.productId)).subscribe((product) => {
      this.productForm.patchValue(product);
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      if (this.productId) {
        this.productService.updateProduct(Number(this.productId), this.productForm.value).subscribe({
          next: () => this.router.navigate(['/products']),
          error: (err) => console.error(err) // Verifique o erro aqui;
        });
      } else {
        this.productService.createProduct(this.productForm.value).subscribe({
          next: () => this.router.navigate(['/products']),
          error: (err) => console.error(err) // Verifique o erro aqui;
        });
      }
    }
  }

  onCancel(): void {
    this.router.navigate(['/products']);
  }
}
