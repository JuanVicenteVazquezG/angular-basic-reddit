import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatIconModule, MatCardModule, MatButtonModule, MatGridListModule],
  exports: [MatIconModule, MatCardModule, MatButtonModule,MatGridListModule],
})
export class MaterialModule {}
