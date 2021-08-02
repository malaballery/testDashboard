import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
{path: "", component: HomePageComponent},
{path: "not-found", component: FourOhFourComponent},
{path: "**", redirectTo:"not-found"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
