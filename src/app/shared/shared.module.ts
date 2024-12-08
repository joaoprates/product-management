import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar'; // Import specific Angular Material module
import { MaterialModule } from './material.module';

@NgModule({
  exports: [HttpClientModule, MaterialModule],
  imports: [HttpClientModule, MaterialModule],
})
export class SharedModule {}