import { NgModule } from '@angular/core';
import {   RouterModule,  Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation'
import { msalGuardCanActivate } from '@mezomon/shared-library-test';
import { MainComponent } from './main-component/main.component';


const routes: Routes = [
  {
    path: 'claims', 
    canActivate: [msalGuardCanActivate],
    loadChildren:() => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './ClaimModule'
    }).then((m) => {
     return  m.ClaimModule
    })
  },
  {
    path: 'remits', 
    canActivate: [msalGuardCanActivate],
    loadChildren:() => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: './RemitsModule'
    }).then((m) => {
     return  m.RemitsModule
    })
  },
  {
    path: '', 
    canActivate: [msalGuardCanActivate],
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
