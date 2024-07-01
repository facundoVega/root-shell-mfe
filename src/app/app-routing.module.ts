import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation'
import { TableComponent } from './table-component/table.component';
import { AppComponent } from './app.component';
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
      console.log(m.ClaimModule);
     return  m.ClaimModule
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
