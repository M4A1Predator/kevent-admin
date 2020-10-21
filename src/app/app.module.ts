import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpClientModule } from '@angular/common/http'

// ngrx
import { StoreModule, MetaReducer } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { rootReducer } from './app.root-reducer'
import { debug, localStorageSyncReducer } from './reducer/meta-reducer'
import { AuthEffects } from './auth/auth.effects'
import { loadData } from './storage/storage'

// FA
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthComponent } from './auth/auth.component'
import { LoginFormComponent } from './auth/login-form/login-form.component'
import { HeaderComponent } from './layout/header/header.component'
import { LayoutComponent } from './layout/layout.component'
import { HomeComponent } from './home/home.component'
import { SidebarComponent } from './layout/sidebar/sidebar.component'
import { EventsPageComponent } from './events/events-page/events-page.component'
import { EventListComponent } from './events/event-list/event-list.component'
import { EventAddComponent } from './events/event-add/event-add.component'
import { EventsPanelComponent } from './events/events-panel/events-panel.component'
import { EventPageComponent } from './events/event-page/event-page.component'
import { ArtistsPageComponent } from './artists/artists-page/artists-page.component'
import { ArtistsPanelComponent } from './artists/artists-panel/artists-panel.component'
import { ArtistAddComponent } from './artists/artist-add/artist-add.component'
import { ArtistsListComponent } from './artists/artists-list/artists-list.component'
import { ArtistPageComponent } from './artists/artist-page/artist-page.component'
import { EventPagePanelComponent } from './events/event-page/event-page-panel/event-page-panel.component'
import { EventPageArtistsComponent } from './events/event-page/event-page-artists/event-page-artists.component'
import { KConfigModule } from './kconfig/kconfig.module'
import { EventPageDetailComponent } from './events/event-page/event-page-detail/event-page-detail.component'
import { EventAddArtistComponent } from './events/event-page/event-add-artist/event-add-artist.component'
import { EventPageDangerComponent } from './events/event-page/event-page-danger/event-page-danger.component'
import { EditPerformTimeComponent } from './events/event-page/components/edit-perform-time/edit-perform-time.component'
import { ArtistDetailComponent } from './artists/artist-page/artist-detail/artist-detail.component'
import { ImgUploaderComponent } from './events/event-page/components/img-uploader/img-uploader.component'
import { ArtistDangerComponent } from './artists/artist-page/artist-danger/artist-danger.component'
import { EventPageZoneComponent } from './events/event-page/event-page-zone/event-page-zone.component'
import { ArtistPageFilesComponent } from './artists/artist-page/artist-page-files/artist-page-files.component'
import { EditTicketSellingComponent } from './events/event-page/components/edit-ticket-selling/edit-ticket-selling.component'

export const metaReducers: MetaReducer<any>[] = [debug, localStorageSyncReducer]

// const initialState = loadData()

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
    EventPageComponent,
    ArtistsPageComponent,
    ArtistsPanelComponent,
    ArtistAddComponent,
    ArtistsListComponent,
    ArtistPageComponent,
    EventPagePanelComponent,
    EventPageArtistsComponent,
    EventPageDetailComponent,
    EventAddArtistComponent,
    EventPageDangerComponent,
    EditPerformTimeComponent,
    ArtistDetailComponent,
    ImgUploaderComponent,
    ArtistDangerComponent,
    EventPageZoneComponent,
    ArtistPageFilesComponent,
    EditTicketSellingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(rootReducer, { initialState: {}, metaReducers }),
    EffectsModule.forRoot([AuthEffects]),
    FontAwesomeModule,
    FormsModule,
    NgbModule,
    KConfigModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
