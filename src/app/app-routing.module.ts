import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './product/detail/detail.component';
import { MainComponent } from './product/main/main.component';
import { CategoryComponent } from './product/category/category.component';
import { ProductbycatComponent } from './product/productbycat/productbycat.component';





const routes: Routes = [{path:'',component:MainComponent},
{path:'category/:id',component:ProductbycatComponent},
{path:'home',component:MainComponent},
{path:'detail/:id',component:DetailComponent },
{path:'categoryhome',component:CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
