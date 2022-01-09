import { NgModule } from '@angular/core';
import { PatternLibComponent } from './pattern-lib.component';
import { ButtonComponent } from './button/button.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [PatternLibComponent, ButtonComponent],
  imports: [BrowserModule],
  exports: [PatternLibComponent],
})
export class PatternLibModule {}
