import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MealsComponent } from './meals/meals.component';
import { MealComponent } from './meal/meal.component';


const appRoutes: Routes = [
  { path: ':meal/:id',                    component: MealsComponent },
  { path: ':meal/:id/:mealName',          component: MealComponent },
  { path: '',                             component: HomeComponent },
  { path: '**',                           component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    MealsComponent,
    MealComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( appRoutes ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
