import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { Landingpage2Component } from './landingpage2/landingpage2.component';
import { Landingpage3Component } from './landingpage3/landingpage3.component';
import { Landingpage4Component } from './landingpage4/landingpage4.component';
import { Landingpage5Component } from './landingpage5/landingpage5.component';
import { Landingpage6Component } from './landingpage6/landingpage6.component';
import { Landingpage7Component } from './landingpage7/landingpage7.component';
import { Landingpage8Component } from './landingpage8/landingpage8.component';
import { Landingpage9Component } from './landingpage9/landingpage9.component';
import { LoginsignComponent } from './loginsign/loginsign.component';

const routes: Routes = [
  {
    path:'',
    component: LoginsignComponent
  },
  {
  path:'landing1',
  component: LandingpageComponent
},
{
  path:'blog',
  component: BlogHomeComponent
},
{
  path:'landing2',
  component: Landingpage2Component
},
{
  path:'landing3',
  component: Landingpage3Component
},
{
  path:'landing4',
  component: Landingpage4Component
},
{
  path:'landing5',
  component: Landingpage5Component
},
{
  path:'landing6',
  component: Landingpage6Component
},
{
  path:'landing7',
  component: Landingpage7Component
},
{
  path:'landing8',
  component: Landingpage8Component
},
{
  path:'landing9',
  component: Landingpage9Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
