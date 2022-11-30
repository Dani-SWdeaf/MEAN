import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'dashbord',
    loadChildren: () => import('src/app/dashbord/dashbord.module').then(x => x.DashbordModule)
  },
  {
    path: '**',
    redirectTo: 'dashbord'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
