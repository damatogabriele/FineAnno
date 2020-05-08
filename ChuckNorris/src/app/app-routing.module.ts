import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrasiComponent } from './frasi/frasi.component';

const routes: Routes = [
{ path: '', redirectTo: 'frasi', pathMatch: 'full'},
{ path: 'frasi', component: FrasiComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
