
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

import {AppComponent} from './app.component';
//import {TransferHttpCacheModule} from '@nguniversal/common';

import { MaterialDesignFrameworkModule } from 'angular6-json-schema-form';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: AppComponent, pathMatch: 'full'},
    ]),
//    TransferHttpCacheModule,
    MaterialDesignFrameworkModule, BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule, MatCardModule, MatCheckboxModule,
    MatIconModule, MatMenuModule, MatSelectModule, MatToolbarModule,
    BrowserModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  entryComponents: [AppComponent],
//  bootstrap: [AppComponent]
})

export class AppElementModule {
  constructor(private injector: Injector) {
    const myElement = createCustomElement(AppComponent, { injector });
    customElements.define('my-app', myElement);
  }
  ngDoBootstrap() {}
}


