import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { DogComponent } from './dog/dog.component';
import { RulesComponent } from './rules/rules.component';
import { NewsletterComponent } from './newsletter/newsletter.component';


//importować resztę menu
export const router: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'about', component: AboutComponent},
  { path: 'dogs', component: DogComponent},
  { path: 'rules', component: RulesComponent },
  { path: 'newsletter', component: NewsletterComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);