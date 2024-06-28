import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table-component/table.component';
import { MsalRedirectComponent } from '@azure/msal-angular';
import { msalAuthModule, HeaderComponent, SidebarComponent } from '@mezomon/shared-library-test';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    msalAuthModule,
    HeaderComponent,
    SidebarComponent
  ],
  providers: [],
  bootstrap: [AppComponent, MsalRedirectComponent]
})
export class AppModule { }
