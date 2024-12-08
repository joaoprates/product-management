import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from '../../shared/material.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';


@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, SharedModule, CommonModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  categories: string[] = ['Category1', 'Category2', 'Category3']; // Replace with real data
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
      categoryPath: ['', Validators.required],
      available: [false]
    });

    if (this.productId) {
      this.loadProduct();
    }
  }

  loadProduct(): void {
    this.productService.getProductById(Number(this.productId)).subscribe((product) => {
      this.productForm.patchValue(product);
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      if (this.productId) {
        this.productService.updateProduct(Number(this.productId), this.productForm.value).subscribe(() => {
          this.router.navigate(['/products']);
        });
      } else {
        this.productService.createProduct(this.productForm.value).subscribe(() => {
          this.router.navigate(['/products']);
        });
      }
    }
  }

  onCancel(): void {
    this.router.navigate(['/products']);
  }
}
