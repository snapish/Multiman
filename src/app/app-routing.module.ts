import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeleeComponent } from './melee/melee.component';
import { UltimateComponent } from './ultimate/ultimate.component';
import { ProjectmComponent } from './projectm/projectm.component';
import { RivalsComponent } from './rivals/rivals.component';

const routes: Routes = [
{path: "melee", component: MeleeComponent},
{path:"ultimate", component: UltimateComponent},
{path: "pm", component:ProjectmComponent},
{path: "rivals", component:RivalsComponent},
{path: "", component: MeleeComponent},
{path:"**",component:MeleeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
