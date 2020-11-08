import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailproComponent } from './detailpro/detailpro.component';
import { MainComponent } from './main/main.component';
import { CateogoryComponent } from './product/cateogory/catemain/cateogory.component';
import { CaterightComponent } from './product/cateogory/cateright/cateright.component';
import { CateleftComponent } from './product/cateogory/cateleft/cateleft.component';



const routes: Routes = [{path:'',component:MainComponent},{path:'category/:id',component:CaterightComponent},{path:'home',component:MainComponent},
{path:'detail/:id',component:DetailproComponent},
{path:'categoryhome',component:CateogoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
