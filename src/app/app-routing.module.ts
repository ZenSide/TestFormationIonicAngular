import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)},
  {
    path: 'liste-students',
    loadChildren: () => import('./pages/liste-students/liste-students.module').then(m => m.ListeStudentsPageModule)
  },
  {
    path: 'details-students',
    loadChildren: () => import('./pages/details-students/details-students.module').then(m => m.DetailsStudentsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
