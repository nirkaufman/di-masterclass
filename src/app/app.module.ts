import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedUiModule} from './shared-ui/shared-ui.module';
import {EagerFeatureModule} from './eager-feature/eager-feature.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedUiModule, EagerFeatureModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
