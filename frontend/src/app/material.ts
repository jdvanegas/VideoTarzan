import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { NgModule, forwardRef } from '@angular/core';

@NgModule({
  imports: [MatSliderModule, MatButtonModule, MatToolbarModule, MatIconModule],
  exports: [MatSliderModule, MatButtonModule, MatToolbarModule, MatIconModule]
})
export class MaterialModule { }