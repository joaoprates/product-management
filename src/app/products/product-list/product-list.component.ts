import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = []; // Corrigir o tipo para Product[]
  displayedColumns: string[] = ['name', 'description', 'price', 'category', 'available', 'actions'];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  editProduct(id: number) {
    this.router.navigate(['/products/edit', id]);
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.fetchProducts();
    });
  }
}
