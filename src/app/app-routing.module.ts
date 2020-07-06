import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EagerFeatureComponent} from './eager-feature/eager-feature.component';

const routes: Routes = [
  {
    path: 'eager',
    component: EagerFeatureComponent
  },
  {
    path: 'lazy',
    loadChildren: () =>  import('./lazy-feature/lazy-feature.module').then( m => m.LazyFeatureModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
