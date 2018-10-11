import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DatamapComponent } from './datamap/datamap.component';

@NgModule({
  declarations: [
    AppComponent,
    DatamapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
