import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'contatos',
    loadChildren: () => import('./contatos/contatos.module').then( m => m.ContatosPageModule)
  },
  {
    path: 'criarcontato',
    loadChildren: () => import('./criarcontato/criarcontato.module').then( m => m.CriarcontatoPageModule)
  },
  {
    path: 'editar/:id',
    loadChildren: () => import('./editar/editar.module').then( m => m.EditarPageModule)
  },
  {
    path: 'teste',
    loadChildren: () => import('./teste/teste.module').then( m => m.TestePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
