import { MatSliderModule } from '@angular/material/slider';
import { NgModule, forwardRef } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule, MatList } from '@angular/material/list';

@NgModule({
  imports: [
    MatSliderModule, LayoutModule, MatSidenavModule, MatListModule,
    MatButtonModule, MatToolbarModule, MatIconModule],
  exports: [
    MatSliderModule, LayoutModule, MatSidenavModule, MatListModule,
    MatButtonModule, MatToolbarModule, MatIconModule]
})
export class MaterialModule { }