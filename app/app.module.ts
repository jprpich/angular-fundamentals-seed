import { NgModule } from'@angular/core';
import { FormsModule} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { BrowserModule} from '@angular/platform-browser';

import { AppComponent } from './app.component';





@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule],
  declarations:[AppComponent],
  bootstrap:[AppComponent]
})


export class AppModule{}