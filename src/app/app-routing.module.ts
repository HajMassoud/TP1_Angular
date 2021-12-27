import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddLivreComponent } from './add-livre/add-livre.component';
import { ListeLivreComponent } from './liste-livre/liste-livre.component';

const routes: Routes = [
  { path:"liste",component:ListeLivreComponent},
  { path:"add",component:AddLivreComponent},
  { path:"",component:ListeLivreComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
