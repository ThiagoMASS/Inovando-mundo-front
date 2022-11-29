import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TelacardComponent } from './components/telacard/telacard.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent
  
},
{
  path:'telacard',
  component:TelacardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
