import { Component } from "@angular/core";
import { MsalCustomService, activeUSer, currentUser } from "@mezomon/shared-library-test";
import { Store } from '@ngrx/store';


@Component({
    selector: 'main-component',
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss'
})

export class MainComponent {

    $user = this.store.select(activeUSer)

    constructor(
        private msalCustomService: MsalCustomService,
        private store: Store,
        ) {}
    
    ngOnInit(): void {
    
        this.msalCustomService.checkLogin().subscribe((userName)=> { 
            this.store.dispatch(currentUser({userName: userName}));
        });
        }
    
        logout(): void {
        this.msalCustomService.logout();
        }

}