import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DogComponent } from './dog/dog.component';
import { PuppydetailsComponent } from './puppydetails/puppydetails.component';
import { MenuComponent } from './menu/menu.component';

const appRoutes: Routes = [
{  path: 'puppy-details', component: PuppydetailsComponent }];

@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    PuppydetailsComponent,
    MenuComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DogComponent, PuppydetailsComponent, MenuComponent],
  bootstrap: [AppComponent, DogComponent, PuppydetailsComponent, MenuComponent]
})
export class AppModule { 
}
