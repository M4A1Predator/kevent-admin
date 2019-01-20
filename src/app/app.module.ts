import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

// ngrx
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'
import { rootReducer } from './app.root-reducer';
import { debug } from './reducer/meta-reducer'
import { AuthEffects } from './auth/auth.effects'
import { loadData } from './storage/storage'

// FA
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
import { EventAddComponent } from './events/event-add/event-add.component';
import { EventsPanelComponent } from './events/events-panel/events-panel.component';
import { EventPageComponent } from './events/event-page/event-page.component';

export const metaReducers: MetaReducer<any>[] = [debug];

const initialState = loadData();

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
    EventListComponent,
    EventAddComponent,
    EventsPanelComponent,
    EventPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(rootReducer, { initialState, metaReducers }),
    EffectsModule.forRoot([AuthEffects]),
    FontAwesomeModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
