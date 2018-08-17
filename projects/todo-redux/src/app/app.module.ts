import { NgModule } from '@angular/core';
import { MatIconModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoPreloading, RouterModule } from '@angular/router';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
// App is our top level component
import { AppComponent } from './app.component';
/*
 * Platform and Environment providers/directives/pipes
 */
import { appRoutes } from './app.routes';
// Shared module reexporting all external libaries required todo a todo component
import { SharedModule } from './shared/shared.module';

export const defaultReducers: ActionReducerMap<any> = {

};

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    StoreModule.forRoot(defaultReducers),
    StoreDevtoolsModule.instrument({ logOnly: !environment.production }),
    RouterModule.forRoot(appRoutes, { useHash: false, preloadingStrategy: NoPreloading, enableTracing: true })],
})
export class AppModule {


}
