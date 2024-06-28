import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component,  OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MsalCustomService } from '@mezomon/shared-library-test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit  {
  user!: string;
  @ViewChild("container", { read: ViewContainerRef }) mainContainer!: ViewContainerRef;
  @ViewChild("footerContainer", { read: ViewContainerRef }) footerContainer!: ViewContainerRef;

  constructor(
    private msalCustomService: MsalCustomService
  ) {}

  
  ngOnInit(): void {
    this.msalCustomService.checkLogin().subscribe((userName)=> { 
      this.user = userName;
    });
    this.loadFooter();
  }

  logout(): void {
    this.msalCustomService.logout();
  }
  async loadHeader() {
      const module = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4203/remoteEntry.js',
      exposedModule: './header'
    });
      const { instance } = this.mainContainer.createComponent(module.HeaderComponent);
  }

  async loadFooter() {
    const module = await loadRemoteModule({
    type: 'module',
    remoteEntry: 'http://localhost:4203/remoteEntry.js',
    exposedModule: './footer'
  });
    const { instance } = this.footerContainer.createComponent(module.FooterComponent);
}
}
