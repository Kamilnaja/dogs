import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DogComponent } from './dog/dog.component';

import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { routes } from './app.router';


@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    MenuComponent,
    AboutComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [DogComponent,  MenuComponent],
  bootstrap: [AppComponent, DogComponent,  MenuComponent]
})
export class AppModule { 
}
