import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { DogComponent } from './dog/dog.component';

//importować resztę menu
export const router: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'about', component: AboutComponent},
  { path: 'services', component: DogComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);