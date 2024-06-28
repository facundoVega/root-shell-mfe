import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table-component/table.component';
import { MsalRedirectComponent } from '@azure/msal-angular';
import { msalAuthModule, HeaderComponent, getStoreModule, SidebarComponent } from '@mezomon/shared-library-test';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
    getStoreModule(),
    SidebarComponent,
    StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: false,
        connectInZone: true,
      }),
  ],
  providers: [],
  bootstrap: [AppComponent, MsalRedirectComponent]
})
export class AppModule { }
