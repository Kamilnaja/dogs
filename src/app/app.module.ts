import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DogComponent } from './dog/dog.component';

import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { routes } from './app.router';
import { FooterComponent } from './footer/footer.component';
import { ThankformsubmitComponent } from './thankformsubmit/thankformsubmit.component';
import { RulesComponent } from './rules/rules.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { PuppydetailsComponent } from './puppydetails/puppydetails.component';


@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    MenuComponent,
    AboutComponent,
    FooterComponent,
    ThankformsubmitComponent,
    RulesComponent,
    NewsletterComponent,
    PuppydetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    ReactiveFormsModule,
    
  ],
  providers: [MenuComponent],
  bootstrap: [AppComponent, MenuComponent, FooterComponent]
})
export class AppModule { 
}
