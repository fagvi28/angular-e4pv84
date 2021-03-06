import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { formDemoComponent } from './form-demo/form-demo.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, formDemoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
