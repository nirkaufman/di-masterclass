import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EagerFeatureComponent } from './eager-feature.component';
import {SharedUiModule} from '../shared-ui/shared-ui.module';

@NgModule({
  declarations: [EagerFeatureComponent],
  imports: [
    CommonModule,
    SharedUiModule
  ]
})
export class EagerFeatureModule { }
