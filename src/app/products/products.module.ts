import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductListComponent, ProductFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: ProductListComponent },
      { path: 'create', component: ProductFormComponent }, // Rota para criar produtos
      { path: 'edit/:id', component: ProductFormComponent }, // Rota para editar produtos

    ]),
  ],
})
export class ProductsModule {}
