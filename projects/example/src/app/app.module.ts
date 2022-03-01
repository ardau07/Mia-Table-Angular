import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiaTableModule } from 'projects/agencycoda/mia-table/src/public-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CustomOneColumnComponent } from './custom-one-column/custom-one-column.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomOneColumnComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MiaTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
