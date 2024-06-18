import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit  {
  title = 'root';
  @ViewChild("container", { read: ViewContainerRef }) mainContainer!: ViewContainerRef;
  @ViewChild("footerContainer", { read: ViewContainerRef }) footerContainer!: ViewContainerRef;

  ngOnInit(): void {
    this.loadHeader();
    this.loadFooter();
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
    const { instance } = this.mainContainer.createComponent(module.FooterComponent);
}

}
