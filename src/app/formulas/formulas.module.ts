import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormulasComponent} from "./formulas.component";
import {formulasRouting} from "./formulas.routing";

@NgModule({
  declarations: [FormulasComponent],
  imports: [CommonModule, formulasRouting],
  exports: []
})
export class FormulasModule {}
