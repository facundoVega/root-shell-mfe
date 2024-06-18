import { LoadRemoteModuleOptions, loadRemoteModule } from "@angular-architects/module-federation";
import { Compiler, Component, OnInit } from "@angular/core";
import { from, map, switchMap } from "rxjs";

@Component({
    selector: 'table-component',
    templateUrl: './table.component.html',
    styleUrl: './table.component.scss'
})



export class TableComponent implements OnInit  {
    heroes = null;
    heroService: any = null;

    constructor(
        private compiler: Compiler,
    ) {
            
    }

    ngOnInit(): void {
        this.loadRemoteService().subscribe(()=> {
            this.loadHeroes();
        });
    }

    loadHeroes(): void {
        this.heroes = this.heroService.getHeroes();
    }
    
    loadRemoteService() {
        const options: LoadRemoteModuleOptions = {
            remoteEntry: 'http://localhost:4203/remoteEntry.js',
            type: 'module',
            exposedModule: './service'
        };

      return from(loadRemoteModule(options)).pipe(
        switchMap((module) => this.compiler.compileModuleAsync<any>(module['TestService'])),
        map((moduleFactory) => {
            this.heroService = moduleFactory.moduleType.prototype;
        }));
    }



}