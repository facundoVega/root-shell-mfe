import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation'
import { TableComponent } from './table-component/table.component';

const routes: Routes = [
  {
    path: '', 
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
    path: 'heroes', 
    component: TableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
