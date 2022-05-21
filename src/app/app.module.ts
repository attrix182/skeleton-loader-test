import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { CardComponent } from './card/card.component';


@NgModule({
  imports: [BrowserModule, FormsModule, NgxSkeletonLoaderModule],
  declarations: [AppComponent, HelloComponent, CardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
