import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyFeatureComponent } from './lazy-feature.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [LazyFeatureComponent],
  imports: [
    CommonModule,
      RouterModule.forChild([
        {path: '', pathMatch: 'full', component: LazyFeatureComponent}
      ])
  ]
})
export class LazyFeatureModule {}
