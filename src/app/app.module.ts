import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

// ngrx
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './app.root-reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { EventsPageComponent } from './events/events-page/events-page.component';
import { EventListComponent } from './events/event-list/event-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginFormComponent,
    HeaderComponent,
    LayoutComponent,
    HomeComponent,
    SidebarComponent,
    EventsPageComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(rootReducer),
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
