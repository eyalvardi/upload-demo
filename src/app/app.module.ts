import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MagicUploadComponent } from './magic-upload.component';
import {FileUploadModule} from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    MagicUploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FileUploadModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
